<script context="module">
	import SEO from '$lib/SEO.svelte';
	export const prerender = true;
	export async function load({ fetch, page }) {
		let post;

		try {
			// here we are gonna fetch the single article by id
			post = await fetch(`https://jsonplaceholder.typicode.com/posts/${page.params.slug}`);
			post = await post.json();
		} catch (e) {
			console.log(e);
		}
		return {
			props: {
				post,
				slug: page.params.slug
			}
		};
	}
</script>

<script>
	export let post; // posts
	export let slug;
</script>

<SEO title={`Posts/${slug}`} description={`Blog Post:${slug}`} />

<div class="flex justify-center align-middle items-center w-full">
	<div class="p-4 m-2 border dark:border-gray-500 rounded shadow bg-white dark:bg-green-500 ">
		<a
			href={`/posts`}
			class="text-xs dark:hover:text-green-200 hover:text-green-600 flex bg-gray-100 dark:bg-green-900 dark:text-gray-200 align-middle items-center rounded p-2 shadow"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
					clip-rule="evenodd"
				/>
			</svg>
			<p class="mx-1">All Posts</p></a
		>
		<div
			class="bg-green-50 dark:bg-green-900 dark:text-gray-200 mx-auto m-2 p-1 border border-gray-400 dark:border-gray-700 rounded-md shadow hover:bg-green-300 dark:hover:bg-green-700"
		>
			<h1 class="font-bold">{post.title}</h1>
			<p class="italic">{@html post.body}</p>
		</div>
	</div>
</div>
