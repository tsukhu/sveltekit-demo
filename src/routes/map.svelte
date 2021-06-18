<script>
	import { browser } from '$app/env';
	import MapComponent from '$lib/MapComponent.svelte';
	import locationStore from '$stores/locationStore';
	let error;

	let ready;

	if (browser) {
		window.initMap = () => {
			ready = true;
		};
	}

	function success(position) {
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		locationStore.set({ lat, lng });
	}

	function errorFn() {
		error = 'Unable to retrieve your location';
	}
</script>

<svelte:head>
	<title>Map</title>
	<script defer async src="https://maps.googleapis.com/maps/api/js?callback=initMap">
	</script>
</svelte:head>

<div class="flex align-middle items-center w-full flex-col">
	<div
		class="p-4 m-2 border border-gray-200 rounded shadow flex-1 w-full flex align-middle items-center justify-between"
	>
		<h2 class="font-bold text-center align-middle text-gray-800 m-1">Google Map</h2>
		{#if error}<p class="text-xs text-red-500">{error}</p>{/if}
		<button
			on:click={() => {
				if (!navigator.geolocation) {
					error = 'Geolocation is not supported by your browser';
				} else {
					error = null;
					navigator.geolocation.getCurrentPosition(success, errorFn);
				}
			}}
			class="m-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-5 py-3 bg-purple-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm capitalize"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	<div class="flex-1 w-full">
		{#if ready}
			<MapComponent />
		{/if}
	</div>
</div>
