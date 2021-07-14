<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		let result;
		// SSR enabled stencil sample web component
		// via the hydrate app feature in stencil
		try {
			const res = await fetch(`/api/stensvelteSSR`);
			result = await res.json();
		} catch (e) {
			console.log(e);
		}
		return {
			props: {
				html: result.html
			}
		};
	}
</script>

<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	export let html;
</script>

<!-- <svelte:head>
	<script
		type="module"
		src="https://unpkg.com/stensvelte@0.0.2/dist/stensvelte/stensvelte.esm.js"></script>
</svelte:head> -->

<SEO title={'Stencil Svelte'} description={'Stencil Svelte Demo'} />

<div class="flex justify-center align-middle items-center">
	<div
		class="flex  flex-col justify-center align-middle items-center p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		{@html html}
	</div>
</div>
