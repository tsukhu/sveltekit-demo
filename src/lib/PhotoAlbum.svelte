<script>
	export let photos = [];
</script>

<h1 class="font-bold dark:text-gray-200">Photo album</h1>

<div class="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
	{#each photos as photo}
		<figure class="w-full m-0">
			<img src={photo.thumbnailUrl} alt={photo.title} class="w-full m-0" />
			<figcaption class="text-xs sm:text-sm dark:text-gray-300">{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>
