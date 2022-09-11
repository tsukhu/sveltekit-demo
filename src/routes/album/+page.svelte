
<script lang="ts">
	import PhotoAlbum from '$lib/PhotoAlbum.svelte';
	import SEO from '$lib/SEO.svelte';
	export let data;

	$: ({photos} = data);
</script>

<SEO title={'Photo Album'} description={'Photo Album App'} />

<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		<PhotoAlbum {photos} />
	</div>
</div>
