import { api } from '../api';
export const prerender = true;
export async function load({ params }: any): Promise<{ post: any; slug: any }> {
	let post;
	try {
		// here we are gonna fetch the single article by id
		post = await await api('GET', `posts/${params.slug}`);
		post = await post.json();
	} catch (e) {
		console.log(e);
	}

	return {
		post,
		slug: params.slug
	};
}
