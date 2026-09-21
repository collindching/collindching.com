# Collin's site

Hand-built with Astro. The build log of a data scientist becoming an agent
engineer — and the vehicle for three goals: learn AI, build/ship with AI,
learn marketing.

## Develop

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # production build to ./dist/
npm run preview  # preview the production build
```

## Write

Posts are Markdown files in `src/content/posts/`. That folder is also an
Obsidian vault folder — draft in Obsidian, `git commit` when ready to publish.

Frontmatter:

```md
---
title: "Your title"
description: "One-line summary for listings and SEO."
pubDate: 2026-09-28
tags: ["agents", "evals"]
draft: false # set true to hide
---
```

## Deploy (Cloudflare Pages)

Static output — no adapter needed.

1. Push this repo to GitHub.
2. Cloudflare dashboard → Pages → Create → Connect to Git.
3. Build command: `npm run build`. Output directory: `dist/`.
4. Add your custom domain under Pages → Custom domains.

## TODO

- [x] Set `SITE_URL` in `src/consts.ts` (collindching.com)
- [ ] Buy collindching.com and connect it to Cloudflare Pages
- [ ] OG images for social sharing
- [ ] Cloudflare Web Analytics snippet
- [ ] About page: rewrite in your own voice, add X/GitHub links
- [ ] First animation experiment on `/experiments`
