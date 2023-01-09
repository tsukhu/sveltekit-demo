<script lang="ts">
	import SEO from '$components/SEO.svelte';
	import { browser } from '$app/environment';
	export let data: any;
	$: ({ html, first, last } = data);

	let component: any;
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
		src="https://unpkg.com/stensvelte@0.0.2/dist/stensvelte/stensvelte.esm.js"
	></script>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div
		class="flex relative  flex-col justify-center align-middle items-center p-4 m-2 border  rounded bg-base-300 shadow "
	>
		<div class="h-28 bg-base-200 rounded">{@html component}</div>
		<div>
			<div class="form-control w-full max-w-xs">
				<div class="label">
					<span class="label-text"> First </span>
				</div>

				<input
					class="input input-bordered w-full max-w-xs"
					id="inline-first-name"
					type="text"
					bind:value={first}
				/>
			</div>
			<div class="form-control ">
				<div class="label">
					<span class="label-text"> Last </span>
				</div>
				<textarea
					class="textarea textarea-secondary textarea-bordered h-32"
					id="inline-last-name"
					bind:value={last}
				/>
			</div>
		</div>
	</div>
</div>
