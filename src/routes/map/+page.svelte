<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$components/SEO.svelte';
	import MapComponent from '$components/MapComponent.svelte';
	import locationStore from '$stores/locationStore';
	let error;
	let ready: boolean;
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

<div class="flex justify-start items-center w-full flex-col">
	<div
		class="p-4 m-2 rounded shadow w-full flex  items-center justify-between bg-base-300 text-base-content"
	>
		<h2 class="font-bold text-center align-middle m-1">Google Map</h2>
		{#if error}<p class="text-xs text-error">{error}</p>{/if}
		<button
			on:click={() => {
				if (!navigator.geolocation) {
					error = 'Geolocation is not supported by your browser';
				} else {
					error = null;
					navigator.geolocation.getCurrentPosition(success, errorFn);
				}
			}}
			class="btn btn-primary btn-sm capitalize"
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
