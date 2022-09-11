<script >
	import SEO from '$lib/SEO.svelte';
	export let data;

	$: ({posts} = data);
</script>

<SEO title={'Posts'} description={'Blog Posts'} />

<div class="flex justify-center align-middle items-center w-full">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-green-500 w-full"
	>
		<h1 class="font-bold dark:text-gray-900">Posts</h1>
		{#each posts as post}
			<a data-sveltekit-prefetch href={`/posts/${post.id}`}>
				<div
					class="bg-green-50 dark:bg-green-900 dark:text-gray-200 mx-auto m-2 p-1 border border-gray-400 dark:border-gray-700 rounded-md shadow hover:bg-green-300 dark:hover:bg-green-700"
				>
					<div>
						<h2 class="font-semibold">{post.title}</h2>
					</div>
					<p class="italic text-gray-700 dark:text-gray-300">
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
