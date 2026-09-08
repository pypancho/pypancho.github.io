This repository contains a lightweight static website designed for direct
deployment with GitHub Pages. It does not require Node.js, Python, Gatsby,
React, or any build framework.

## Pages

- `index.html` — Home, research topics, featured research, and latest news
- `news.html` — News and invited talks
- `publications.html` — Journal publications with search and filters
- `team.html` — Co-advised Ph.D. students and master's students
- `cv.html` — Curriculum Vitae with print / Save as PDF support
- `404.html` — Custom GitHub Pages not-found page

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── js/
│       └── site.js
├── 404.html
├── CNAME
├── README.md
├── cv.html
├── index.html
├── news.html
├── publications.html
└── team.html
```

## Deployment

The site is configured to deploy automatically from the `main` branch using
GitHub Actions.

1. Replace the contents of the target GitHub repository with this project.
2. Commit and push to `main`.
3. In **Settings → Pages**, select **GitHub Actions** as the Pages source if it
   is not already enabled.
4. The workflow in `.github/workflows/pages.yml` will publish the site.

Example:

```bash
git add .
git commit -m "Deploy academic homepage"
git push origin main
```

## Custom domain

The `CNAME` file is configured for:

```text
pangyan.me
```

Keep this file in the repository root when deploying to GitHub Pages.

## Updating content

Most routine updates only require editing the corresponding HTML file:

- publications → `publications.html`
- news / invited talks → `news.html`
- students → `team.html`
- CV → `cv.html`
- homepage content → `index.html`

Shared styling is maintained in `assets/css/styles.css`, and shared interactive
behavior is maintained in `assets/js/site.js`.

## CV printing

The CV page includes a **Print / Save as PDF** function. The print layout
automatically includes the academic summary and journal publications in the
formatted CV output.

## License / content

Website source and content are maintained by Yan Pang. Third-party publication
links, institutional links, and referenced research resources remain subject
to their respective owners' terms.
