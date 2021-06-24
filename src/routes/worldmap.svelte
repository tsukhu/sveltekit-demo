<script context="module">
	// this is runned on load (check svelKit doc)
	export async function load({ fetch }) {
		let dataGeo;
		const urls = [
			'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
		];
		const getFetchResults = async (url, type) => {
			let result;
			let headers =
				type === 'json'
					? { 'content-type': 'application/json' }
					: { 'content-type': 'text/csv;charset=UTF-8' };
			try {
				const data = await fetch(url, headers);
				result = type === 'json' ? await data.json() : await data.text();
			} catch (e) {
				console.log(e);
			}
			return result;
		};
		dataGeo = await getFetchResults(urls[0], 'json');
		return {
			props: {
				result: {
					dataGeo
				}
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
	import Loader from '$lib/Loader.svelte';
	export let result;
	const viewBoxConfig = {
		minX: 0,
		minY: 0,
		width: 1000,
		height: 500,
		legendOffsetX: 35,
		legendLabelOffsetX: 80
	};
	let viewBox;
	let label = 'where surfers live';
	let baseLayout;
	let size;
	let features: any[] = [];
	let circleData: any[] = [];
	let valuesToShow = [100, 4000, 15000];
	let legendValues: any[] = [];
	let ready = false;
	$: viewBox = `${viewBoxConfig.minX} ${viewBoxConfig.minY} ${viewBoxConfig.width} ${viewBoxConfig.height}`;
	onMount(async () => {
		Promise.all([
			import('d3-fetch'),
			import('d3-geo'),
			import('d3-scale'),
			import('d3-scale-chromatic'),
			import('d3-array')
		]).then(async ([d3fetch, geo, scale, scaleChromatic, d3Array]) => {
			try {
				let projection = geo.geoNaturalEarth1();
				let pathGenerator = geo.geoPath().projection(projection);
				baseLayout = pathGenerator({ type: 'Sphere' });
				const countries = result.dataGeo;
				features = countries.features.map((f) => ({
					d: pathGenerator(f)
				}));

				const data = await d3fetch.csv(
					'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv'
				);

				// Create a color scale
				let color = scale
					.scaleOrdinal()
					.domain(data.map((d) => d.homecontinent))
					.range(scaleChromatic.schemePaired);
				// Add a scale for bubble size
				let valueExtent = d3Array.extent(data, (d) => +d.n);
				size = scale
					.scaleSqrt()
					.domain(valueExtent) // What's in the data
					.range([1, 50]); // Size in pixel

				circleData = data.map((d) => ({
					...d,
					circle: {
						cx: projection([+d.homelon, +d.homelat])[0],
						cy: projection([+d.homelon, +d.homelat])[1],
						r: size(+d.n),
						stroke: color(d.homecontinent),
						strokeWidth: 1,
						fillOpacity: 0.4
					}
				}));

				legendValues = valuesToShow.map((v) => ({
					circle: {
						cx: viewBoxConfig.legendOffsetX,
						cy: viewBoxConfig.height - size(v),
						r: size(v),
						fill: 'none',
						stroke: 'black'
					},
					line: {
						x1: viewBoxConfig.legendOffsetX + size(v),
						x2: viewBoxConfig.legendLabelOffsetX,
						y1: viewBoxConfig.height - size(v),
						y2: viewBoxConfig.height - size(v),
						stroke: 'black',
						strokeDasharray: '2,2'
					},
					text: {
						x: viewBoxConfig.legendLabelOffsetX,
						y: viewBoxConfig.height - size(v),
						alignmentBaseline: 'middle',
						val: v
					}
				}));
				ready = true;
			} catch (e) {
				ready = false;
			}
		});
	});
</script>

<svelte:head>
	<title>Surfers</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div
		class="relative p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600 flex-1 w-full h-auto"
	>
		<svg {viewBox}>
			<path fill="currentColor" d={baseLayout} class="text-indigo-700" />

			{#each features as { d }}
				<path fill="currentColor" stroke="black" class="text-gray-300" {d} />
			{/each}

			{#each circleData as { circle }}
				<circle
					cx={circle.cx}
					cy={circle.cy}
					r={circle.r}
					stroke={circle.stroke}
					stroke-width={circle.strokeWidth}
					fill-opacity={circle.fillOpacity}
				/>
			{/each}
			{#if ready}
				<text
					text-anchor="end"
					fill="currentColor"
					x={viewBoxConfig.width}
					y={viewBoxConfig.height}
					width="100%"
					class="capitalize text-gray-900 text-xs"
				>
					{label}
				</text>

				{#each legendValues as { circle, line, text }}
					<circle {...circle} />
					<line {...line} stroke-dasharray={line.strokeDasharray} />
					<text
						{...text}
						alignment-baseline={text.alignmentBaseline}
						class="capitalize text-gray-900 text-xs">{text.val}</text
					>
				{/each}
			{/if}
		</svg>
		{#if !ready}
			<div class="absolute right-0 bottom-1">
				<Loader />
			</div>
		{/if}
	</div>
</div>
