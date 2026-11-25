# Outfiter

A complete, static-first wardrobe and outfit planner. Organize pieces, search and filter your closet, generate outfit combinations, and save favorite looks. Your wardrobe data is stored locally in the browser; no account or backend is needed.

## Run locally

Requires Node.js 22.12.0 or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; Astro writes the deployable static site to `dist/`. Preview it locally with `npm run preview`.

## Deploy to Cloudflare Pages

This project uses Astro's static output and does not need a server adapter.

1. Push this repository to GitHub and connect it in **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Choose **Astro** as the framework preset, or enter these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `22.12.0` or newer (set `NODE_VERSION` if needed)
3. Deploy. Future pushes to the selected branch trigger new deployments.

You can also build locally and deploy the `dist/` directory using Wrangler Pages.

## Deploy to GitHub Pages

The site is static and can be published from the `dist/` output. For a repository site at `https://<user>.github.io/<repo>/`, configure Astro's `base` to `/<repo>` and `site` to the GitHub Pages URL before building. For a user/organization site at `https://<user>.github.io/`, no base path is needed.

## Features

- Starter wardrobe with categories and search/filter controls
- Add or remove clothing pieces
- Outfit suggestions based on available tops, bottoms, shoes, and selected occasion
- Save favorite combinations
- Responsive layout
- Local browser storage, with no external API or backend
