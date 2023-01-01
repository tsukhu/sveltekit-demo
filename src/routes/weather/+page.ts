export const prerender = true;
export async function load({ fetch }: any) {
	let data = {};

	try {
		// here you should type your dev.to username
		const res = await fetch(`/api/countries.json`);
		data = await res.json();
	} catch (e) {
		console.log(e);
	}
	// you can pass the `articles` via props like that
	return {
		weather: data
	};
}
