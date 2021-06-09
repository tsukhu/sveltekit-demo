<script context="module">
	export const prerender = true;
	// this is runned on load (check svelKit doc)
	export async function load({ fetch }) {
		let photos = [];

		try {
			// here you should type your dev.to username
			const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
			photos = await res.json();
		} catch (e) {
			console.log(e);
		}
		// you can pass the `articles` via props like that
		return {
			props: {
				photos
			}
		};
	}
</script>

<script type="ts">
	import PhotoAlbum from '$lib/PhotoAlbum.svelte';
	export let photos = [];
</script>

<svelte:head>
	<title>Photos</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<PhotoAlbum {photos} />
	</div>
</div>
