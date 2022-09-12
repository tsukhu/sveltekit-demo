import { api } from './api';

export const prerender = true;
// this is runned on load (check svelKit doc)
export async function load() {
	let posts;

	try {
		// here you should type your dev.to username
		posts = await api('GET', `posts?_limit=10`);
		posts = await posts.json();
	} catch (e) {
		console.log(e);
	}
	// you can pass the `articles` via props like that
	return {
		posts
	};
}
