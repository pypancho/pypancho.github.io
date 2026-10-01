(() => {
  'use strict';

  const menu = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if (menu && nav) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const fallback = img.parentElement?.querySelector('.portrait-fallback');
    const fail = () => {
      img.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    };
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });

  const rows = [...document.querySelectorAll('[data-pub]')];
  const input = document.querySelector('[data-pub-search]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const empty = document.querySelector('.empty');
  let active = 'all';

  const updatePublications = () => {
    if (!rows.length) return;
    const q = (input?.value || '').trim().toLowerCase();
    let visible = 0;
    rows.forEach((row) => {
      const area = row.dataset.area || '';
      const text = row.textContent.toLowerCase();
      const show = (active === 'all' || area === active) && (!q || text.includes(q));
      row.style.display = show ? '' : 'none';
      if (show) visible += 1;
    });
    if (empty) empty.style.display = visible ? 'none' : 'block';
  };

  input?.addEventListener('input', updatePublications);
  filters.forEach((btn) => btn.addEventListener('click', () => {
    active = btn.dataset.filter || 'all';
    filters.forEach((b) => b.classList.toggle('active', b === btn));
    updatePublications();
  }));

  async function syncPrintPublications() {
    const target = document.querySelector('.print-publications .print-pub-list');
    if (!target) return false;

    try {
      const response = await fetch('publications.html', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Unable to load publications.html (${response.status})`);

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const rows = [...doc.querySelectorAll('[data-pub]')];
      if (!rows.length) throw new Error('No publication rows found.');

      const fragment = document.createDocumentFragment();

      rows.forEach((row) => {
        const year = (row.querySelector('.pub-year')?.textContent || '').trim();
        const title = (row.querySelector('.pub-title')?.textContent || '').trim();
        const authors = (row.querySelector('.pub-authors')?.textContent || '').trim();
        const venue = (row.querySelector('.pub-meta')?.textContent || '').trim();

        if (!title) return;

        const li = document.createElement('li');
        li.className = 'print-pub-item';

        const titleEl = document.createElement('span');
        titleEl.className = 'print-pub-title';
        titleEl.textContent = title;
        li.appendChild(titleEl);

        if (authors) {
          const authorsEl = document.createElement('span');
          authorsEl.className = 'print-pub-authors';
          authorsEl.textContent = authors;
          li.appendChild(authorsEl);
        }

        const metaEl = document.createElement('span');
        metaEl.className = 'print-pub-meta';
        metaEl.textContent = [year, venue].filter(Boolean).join(' · ');
        li.appendChild(metaEl);

        fragment.appendChild(li);
      });

      if (!fragment.childNodes.length) throw new Error('No printable publications generated.');

      target.replaceChildren(fragment);
      return true;
    } catch (error) {
      // Keep the embedded list as a safe fallback for local/offline preview.
      console.warn('Using embedded CV publication list:', error);
      return false;
    }
  }

  const printCV = async () => {
    await syncPrintPublications();
    window.print();
  };

  window.printCV = printCV;

  // Keep the print list synchronized during normal web browsing, so Ctrl+P
  // also uses the latest entries from publications.html.
  if (document.querySelector('.print-publications')) {
    syncPrintPublications();
    window.addEventListener('focus', syncPrintPublications);
  }

  document.querySelectorAll('[data-print]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      await printCV();
    });
  });

  function cleanOfficialActions() {
    document.querySelectorAll('.pub-actions, .featured-actions').forEach((box) => {
      box.querySelectorAll('a,button').forEach((el) => {
        const label = (el.textContent || '').trim().toLowerCase();
        const official = el.matches('a[data-official-action]') && (label === 'paper' || label === 'code');
        if (!official) el.remove();
      });
      box.querySelectorAll('img,svg').forEach((el) => {
        if (!el.closest('a[data-official-action]')) el.remove();
      });
      [...box.children].forEach((el) => {
        if (!el.matches('a[data-official-action]')) el.remove();
      });
    });
  }

  cleanOfficialActions();
  if (document.body) {
    const obs = new MutationObserver(cleanOfficialActions);
    obs.observe(document.body, { childList: true, subtree: true });
  }
})();
