<script>
	import SEO from '$components/SEO.svelte';
	export let data;
	$: ({ post, slug } = data);
</script>

<SEO title={`Posts/${slug}`} description={`Blog Post:${slug}`} />

<div class="flex justify-center w-full">
	<div class="p-4 m-2 border rounded shadow bg-base-100  ">
		<a
			href={`/posts`}
			class="text-xs bg-neutral flex align-middle items-center rounded p-2 shadow hover:bg-neutral-focus"
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
		<div class=" mx-auto m-2 p-1 border  rounded-md shadow bg-info-content">
			<h1 class="font-bold">{post.title}</h1>
			<p class="italic">{@html post.body}</p>
		</div>
	</div>
</div>
