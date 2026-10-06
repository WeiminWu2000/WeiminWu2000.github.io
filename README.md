# Weimin Wu academic website

A static, responsive academic portfolio. Public website content is in `dist/`.

- Edit profile, news, experience, and contact information in `dist/index.html`.
- Edit publications, figure paths, and source links in `dist/papers.json`.
- Publication figures live in `dist/assets/papers/`. Asset provenance is recorded in `paper-assets.json`.
- `dist/style.css` controls the visual design; `dist/script.js` supplies filters, search, and the accessible figure dialog.
- Preview: `python3 -m http.server 4173 --directory dist`.

Content was adapted from https://weiminwu.academicwebsite.com/ and its Publications, Entrepreneurship, and Research Intern Recruitment pages on October 5, 2026. Publication visuals were retrieved from the linked papers and the author's GenomeOcean repository. The layout was inspired by https://limanling.github.io/ and independently implemented.

One publication, *Learning Manifold Data with Flow Matching*, currently has no figure because the publisher blocked automated access. *Discrete Flow Matching Policy Optimization* uses a clearly labeled Algorithm 1 excerpt because the available paper contains no labeled figures.

Hosting identity and static directory are recorded in `.openai/hosting.json`.

Public URL: https://weimin-wu-research.weiminxxxx.chatgpt.site
