<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	});
</script>

<h1>Photo album</h1>

<div class="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
	{#each photos as photo}
		<figure class="w-full m-0">
			<img src={photo.thumbnailUrl} alt={photo.title} class="w-full m-0"/>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

