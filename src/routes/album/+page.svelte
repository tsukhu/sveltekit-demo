<script lang="ts">
	import PhotoAlbum from '$components/PhotoAlbum.svelte';
	import SEO from '$components/SEO.svelte';
	export let data: any;

	$: ({ photos } = data);
</script>

<SEO title={'Photo Album'} description={'Photo Album App'} />

<PhotoAlbum {photos} />
