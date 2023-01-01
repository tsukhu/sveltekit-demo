<script lang="ts">
	import SEO from '$components/SEO.svelte';
	export let data: any;

	$: ({ posts } = data);
</script>

<SEO title={'Posts'} description={'Blog Posts'} />

<div class="flex justify-center align-middle items-center w-full">
	<div class="p-4 m-2 rounded shadow bg-base-200  w-full">
		<h1 class="font-bold dark:text-gray-900">Posts</h1>
		{#each posts as post}
			<a data-sveltekit-prefetch href={`/posts/${post.id}`}>
				<div class="bg-neutral mx-auto m-2 p-1 border  rounded-md shadow hover:bg-neutral-focus ">
					<div>
						<h2 class="font-semibold">{post.title}</h2>
					</div>
					<p class="italic ">
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
