# sveltekit-demo

Experiments with Svelte kit

## About

This provides a complete set of samples built with SvelteKit and deployed on Vercel. This is an ongoing project and will continue to be enhanced with more samples which bring out the power of SvelteKit.

## Demo Site

[Demo Site](https://sveltekit-demo-psi.vercel.app/)

### Details

- Tailwind CSS
- Typescript
- Vercel Adaptor
- Layout - App Shell for entire app
- Todo App: Simple Todo app
- Load App: Reactive Declarations based Loan App
- Counter App: Simple Store base Counter App
- Photo Album: Server side load() 
- Modal Dialog: Modal Dialog using Event Dispatcher
- Blog Posts/Dynamic Slug: Server side load()
- Email Validation and Tooltip - Svelte Actions
- `prefetch` for photos and blog posts
- `Firebase v9 + Google Provider` Auth
- Weather App: Uses endpoints, graphql, reactive functions,store, userid cookie with hooks passed
- Added 404 Page: Error Page
- About with prerendering
- Tests setup with Jest & Testing Library

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