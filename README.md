# Summer Vibes

A minimal placeholder for the Summer Vibes browser game workshop.

## Build

```sh
npm ci
npm run build
```

The static site is written to `dist/`.

## Deploy

In the GitHub repository, open **Settings → Pages** and set the source to
**GitHub Actions**. Every push to `main` will then build and deploy the site.
Pull requests run the build without deploying.
