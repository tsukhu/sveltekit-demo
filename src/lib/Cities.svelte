<script lang="ts">
	import AutoComplete from 'simple-svelte-autocomplete';
	import { createEventDispatcher } from 'svelte';
	const dispatchEvent = createEventDispatcher();
	export let data;
	let selectedCity = null;
	$: if (selectedCity) {
		dispatchEvent('selectedCity', selectedCity.name);
	}
	$: if (data && data.cities && data.cities.length === 0) {
		selectedCity = '';
	}
</script>

<div class="flex flex-col align-middle items-start justify-start">
	<p class="mx-2 text-sm font-bold">Cities</p>
	<div>
		{#if data.cities}
			<AutoComplete
				items={data.cities}
				bind:selectedItem={selectedCity}
				bind:value={selectedCity}
				labelFieldName="name"
				disabled={data === null || (data && data.cities && data.cities.length === 0)}
				className="w-full md:w-80 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-indigo-200 shadow outline-none  focus:outline-none focus:ring mx-2"
			/>
		{/if}
	</div>
</div>
