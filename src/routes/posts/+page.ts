export const prerender = true;
// this is runned on load (check svelKit doc)
export async function load({ fetch }) {
	let posts;

	try {
		// here you should type your dev.to username
		posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
		posts = await posts.json();
	} catch (e) {
		console.log(e);
	}
	// you can pass the `articles` via props like that
	return {
		posts
	};
}
