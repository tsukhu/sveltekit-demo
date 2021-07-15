import type { EndpointOutput } from '@sveltejs/kit';
// Due to this issue given below using node_modules to import the
// StencilJS Generated SSR hydrate function.
// as an example pulished the hydrate function as a module
// https://github.com/vitejs/vite/issues/2579
import { renderToString, HydrateResults } from 'stensvelte_hydrate';
export const get = async (): Promise<EndpointOutput> => {
	const first = "Stencil SSR";
	const last = `'Don't call me a framework' JS`;
	const { html } = (await renderToString(
		`<my-component first="${first}" last="${last}" />`,
		{
			prettyHtml: true
		}
	)) as HydrateResults;

	return new Promise((resolve) => {
		resolve({
			body: {
				html,
				first,
				last
			}
		});
	});
};
