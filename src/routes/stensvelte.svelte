<script context="module">
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
				html: result.html,
				first: result.first,
				last: result.last
			}
		};
	}
</script>

<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	import { browser } from '$app/env';
	export let html;
	export let first;
	export let last;
	let component;
	$: if (browser) {
		component = `<my-component first="${first}" last="${last}" />`;
	} else {
		component = html;
	}
</script>

<SEO title={'Stencil Svelte'} description={'Stencil Svelte Demo'} />

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/stensvelte@0.0.2/dist/stensvelte/stensvelte.esm.js"></script>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div
		class="flex relative  flex-col justify-center align-middle items-center p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		<div class="h-28">{@html component}</div>
		<div>
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label
						class="block text-gray-500 dark:text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="inline-first-name"
					>
						First
					</label>
				</div>
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-first-name"
						type="text"
						bind:value={first}
					/>
				</div>
			</div>
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label
						class="block text-gray-500 dark:text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="inline-last-name"
					>
						Last
					</label>
				</div>
				<div class="md:w-2/3">
					<textarea
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-last-name"
						type="text"
						bind:value={last}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
