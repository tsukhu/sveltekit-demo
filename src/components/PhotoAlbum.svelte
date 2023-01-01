<script>
	/**
	 * @type {any[]}
	 */
	export let photos = [];
</script>

<div class="flex flex-col justify-center items-center h-full w-full">
	<h1 class="font-bold  text-4xl p-2">Photo album</h1>
	<div class="w-full flex h-full overflow-y-auto">
		<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 h-auto w-auto">
			{#each photos as photo}
				<figure class="w-full m-0">
					<img src={photo.thumbnailUrl} alt={photo.title} class="w-full m-0" />
					<figcaption class="text-xs sm:text-sm dark:text-gray-300">{photo.title}</figcaption>
				</figure>
			{:else}
				<p>loading...</p>
			{/each}
		</div>
	</div>
</div>
