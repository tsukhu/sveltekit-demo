
export async function load({ fetch }) {
	let result;
	// SSR enabled stencil sample web component
	// via the hydrate app feature in stencil
	try {
		const res = await fetch(`/api/stensvelteSSR`);
		result = await res.json();
	} catch (e) {
		console.log(e);
	}
	return {
		html: result.html,
		first: result.first,
		last: result.last
	};
}
