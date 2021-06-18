<script>
	import locationStore from '$stores/locationStore';
	import { onMount } from 'svelte';

	let container;
	let map;
	let zoom = 8;
	let center;
	$: center = $locationStore;

	onMount(async () => {
		map = new google.maps.Map(container, {
			zoom,
			center
		});
	});

	$: if (center && map) {
		map.setCenter(center);
	}
</script>

<div class="flex flex-1 h-96 w-full" bind:this={container} />
