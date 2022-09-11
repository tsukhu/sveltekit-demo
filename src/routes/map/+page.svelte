<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/SEO.svelte';
	import MapComponent from '$lib/MapComponent.svelte';
	import locationStore from '$stores/locationStore';
	let error;
	let ready;
	let myScript;
	onMount(() => {
		if (typeof window.google === 'undefined') {
			myScript = document.createElement('script');
			myScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?callback=initMap');
			document.body.appendChild(myScript);
		} else {
			ready = true;
		}
		(window as any).initMap = () => {
			ready = true;
		};
	});

	function success(position) {
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		locationStore.set({ lat, lng });
	}

	function errorFn() {
		error = 'Unable to retrieve your location';
	}
</script>

<SEO title={'Maps'} description={'Google Maps Demo'} />

<div class="flex align-middle items-center w-full flex-col">
	<div
		class="p-4 m-2  border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600 flex-1 w-full flex align-middle items-center justify-between"
	>
		<h2 class="font-bold text-center align-middle text-gray-800 dark:text-gray-200 m-1">
			Google Map
		</h2>
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
			class="m-2 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-500 shadow-sm px-5 py-3 bg-purple-500 dark:bg-purple-400 text-base font-medium text-white hover:bg-purple-700  dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-purple-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm capitalize"
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
