<script lang="ts">
	import AutoComplete from 'simple-svelte-autocomplete';
	import { createEventDispatcher } from 'svelte';
	import countryStore from '../stores/countryStore';
	const dispatchEvent = createEventDispatcher();
	export let data;
	//let selectedCountry;
	/* 	const getCities = async (selectedCountry: any) => {
		let data;
		try {
			const res = await fetch(`/api/${selectedCountry}.cities.json`);
			data = await res.json();
		} catch (e) {
			console.log(e);
		}
		return data;
	}; */
	$: if ($countryStore) {
		dispatchEvent('selectedCountry', $countryStore.id);
	}
</script>

<div class="flex flex-col align-middle items-start justify-start">
	<p class="mx-2 text-sm font-bold">Countries</p>
	<div>
		{#if data.data}
			<AutoComplete
				items={data.data}
				bind:selectedItem={$countryStore}
				labelFieldName="name"
				placeholder="Select Country"
				className="w-full md:w-80 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-indigo-200 shadow outline-none  focus:outline-none focus:ring mx-2"
			/>
		{/if}
	</div>
</div>
