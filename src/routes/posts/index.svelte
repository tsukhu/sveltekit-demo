<script context="module">
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
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<div class="flex justify-center align-middle items-center w-full">
	<div class="p-4 m-2 border border-gray-200 rounded shadow w-full">
		<h1 class="font-bold">Posts</h1>
		{#each posts as post}
			<a sveltekit:prefetch href={`/posts/${post.id}`}>
				<div class="bg-green-50 mx-auto m-2 p-1 border border-gray-400 rounded-md shadow hover:bg-green-300">
					<div>
						<h2 class="font-semibold">{post.title}</h2>
					</div>
					<p class="italic text-gray-700">
						{`${post.title.substring(0, 20)}...`}
					</p>
				</div>
			</a>
		{/each}
		{#if posts.length === 0}
			<div>No Posts</div>
		{/if}
	</div>
</div>
