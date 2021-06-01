<script context="module">
	export const prerender = true;
</script>

<script type="ts">
	import PhotoAlbum from '$lib/PhotoAlbum.svelte';
</script>

<svelte:head>
	<title>World Bank</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<PhotoAlbum />
	</div>
</div>
