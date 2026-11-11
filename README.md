# Rohit Prasad Verma — Portfolio

A responsive static portfolio for video editor and videographer Rohit Prasad Verma.

## Deploy to Cloudflare

This repository includes a Wrangler configuration for Cloudflare Workers static assets. If your Cloudflare project runs `npx wrangler deploy`, keep that deploy command and leave the build command empty. `wrangler.jsonc` configures the repository root as the static asset directory; `.assetsignore` keeps the README and Wrangler config private.

For a Cloudflare Pages project instead, connect this repository and set:

- **Framework preset:** None
- **Build command:** leave blank
- **Build output directory:** `.`

The site is served directly from `index.html`; no build step or dependencies are required. The portrait and five short-form reels are loaded from the existing live site, and the YouTube portfolio pieces use privacy-enhanced embeds.
