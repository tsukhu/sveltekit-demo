// Due to this issue given below using node_modules to import the
// StencilJS Generated SSR hydrate function.
// as an example pulished the hydrate function as a module
// https://github.com/vitejs/vite/issues/2579
import { renderToString, type HydrateResults } from 'stensvelte_hydrate';
import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async () => {
	const first = 'Stencil SSR';
	const last = `'Don't call me a framework' JS`;
	const { html } = (await renderToString(`<my-component first="${first}" last="${last}" />`, {
		prettyHtml: true
	})) as HydrateResults;

	return json$1({
		html,
		first,
		last
	});
};
