<script context="module">
	// this is runned on load (check svelKit doc)
	export async function load({ fetch }) {
		let result = {};

		try {
			const data = await fetch('https://unpkg.com/world-atlas@1.1.4/world/110m.json');
			result = await data.json();
		} catch (e) {
			console.log(e);
		}
		// you can pass the `articles` via props like that
		return {
			props: {
				result
			}
		};
	}
</script>

<script lang="ts">
	/**
	 * https://github.com/vitejs/vite/issues/2393
	 * https://github.com/sveltejs/kit/issues/1549
	 * TODO: Due to issues of Vite not being able to load the d3 library , implemented it a bit differently for now
	 * where the d3 lib is dynamically loaded and then used for the rendering logic
	 */
	import { onMount } from 'svelte';
	//	let svg;
	let svgRef;
	//	let projection;
	let pathGenerator;
	let countries;
	//	let selectionModule;
	//let toposModule;
	export let result;
	let ready = false;

	onMount(async () => {
		Promise.all([import('d3-geo'), import('topojson')]).then(async ([geo, topojson]) => {
			//const selectionModule = selection;
			const toposModule = topojson;
			const projection = geo.geoNaturalEarth1();
			pathGenerator = geo.geoPath().projection(projection);
			countries = toposModule.feature(result, result.objects.countries);
			ready = true;
		});
	});
	/* 	$: {
		if (ready) {
			console.log(countries, svgRef);
			svg = selectionModule.select(svgRef);
			svg
				.append('path')
				.style('fill', '#4242e4')
				.attr('d', pathGenerator({ type: 'Sphere' })); 
			svg
				.selectAll('path')
				.data(countries.features)
				.enter()
				.append('path')
				.style('fill', 'lightgreen')
				.style('stroke', 'black')
				.style('stroke-opacity', '0.1')
				.attr('d', pathGenerator); 
		}
	} */
</script>

<svelte:head>
	<title>Earth Quake</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600 flex-1 w-full h-auto"
	>
		{#if !ready}
			<div>
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-green-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
		{:else}
			<svg viewBox="0 0 1000 500" bind:this={svgRef}>
				<path fill="#4242e4" d={pathGenerator({ type: 'Sphere' })} />
				{#each countries.features as feature}
					<path fill="currentColor" stroke="black" class="text-green-300" d={pathGenerator(feature)} />
				{/each}
			</svg>
		{/if}
	</div>
</div>
