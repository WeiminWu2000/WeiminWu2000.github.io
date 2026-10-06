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

## Edit and publish through GitHub

Repository: https://github.com/WeiminWu2000/WeiminWu2000.github.io

GitHub Pages URL: https://weiminwu2000.github.io/

Open any file in the repository, click the pencil icon, make changes, and commit to `main`. The **Publish academic website** GitHub Actions workflow automatically publishes the `dist/` folder. Check the repository's **Actions** tab for deployment progress.

For local edits, commit your changes and run `git push github HEAD:main` from this folder. The `github` remote uses your existing SSH authentication. GitHub Pages deployment adjusts canonical and social-image URLs for the GitHub domain without changing the Sites copy.

The ChatGPT Sites URL is a separate deployment; GitHub commits update GitHub Pages automatically, while updates to the Sites URL must be published separately through Sites.

The QIA detail page is `dist/qia.html`. Employer logos were sourced from the official NVIDIA and Quest Diagnostics website headers. Publication code links point to verified public repositories linked from papers or their authors/labs.
