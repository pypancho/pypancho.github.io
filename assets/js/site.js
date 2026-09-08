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

  const printCV = () => window.print();
  window.printCV = printCV;
  document.querySelectorAll('[data-print]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      printCV();
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
