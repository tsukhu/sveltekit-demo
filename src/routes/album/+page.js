export const prerender = true;
// this is runned on load (check svelKit doc)
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let photos = [];

	try {
		// here you should type your dev.to username
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	} catch (e) {
		console.log(e);
	}
	// you can pass the `articles` via props like that
	return {
		photos
	};
}
