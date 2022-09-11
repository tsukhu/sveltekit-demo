export const prerender = true;
export async function load({ fetch, params }) {
	let post;

	try {
		// here we are gonna fetch the single article by id
		post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
		post = await post.json();
	} catch (e) {
		console.log(e);
	}
	return {
		post,
		slug: params.slug
	};
}
