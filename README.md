# sveltekit-demo

Experiments with Svelte kit

## About

This provides a complete set of samples built with SvelteKit and deployed on Vercel. This is an ongoing project and will continue to be enhanced with more samples which bring out the power of SvelteKit.

## Demo Site

[Demo Site](https://sveltekit-demo-psi.vercel.app/)

### Details

- [x] Tailwind CSS
- [x] Typescript
- [x] Vercel Adaptor
- [x] Layout - App Shell for entire app
- [x] Todo App: Simple Todo app
- [x] Load App: Reactive Declarations based Loan App
- [x] Counter App: Simple Store base Counter App
- [x] Photo Album: Server side load() 
- [x] Modal Dialog: Modal Dialog using Event Dispatcher
- [x] Blog Posts/Dynamic Slug: Server side load()
- [x] Email Validation and Tooltip - Svelte Actions
- [x] `prefetch` for photos and blog posts
- [x] `Firebase v9 + Google Provider` Auth
- [x] Weather App: Uses endpoints, graphql, reactive functions,store, userid cookie with hooks passed
- [x] Added 404 Page: Error Page
- [x] About with prerendering
- [x] Tests setup with Jest & Testing Library
- [x] Google Maps Integation
- [x] Tailwind Dark Mode
- [x] D3 Maps [World Surfers D3 Sample](https://www.d3-graph-gallery.com/graph/bubblemap_template.html) using SvelteKit for declarative syntax and Svelte Animation integration
- [x] Basic SEO handling added. For a detailed implementation at a look at Rodneys example [SvelteKit-SEO](https://github.com/rodneyrehm/sveltekit-seo)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Known Issues

- World Map Sample
    - [viteJS D3 issue](https://github.com/vitejs/vite/issues/2393)