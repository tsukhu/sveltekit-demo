export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		title: `About Page`,
		content: `About Page`
	};
}
