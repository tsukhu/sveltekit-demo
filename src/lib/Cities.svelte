<script lang="ts">
	import AutoComplete from 'simple-svelte-autocomplete';
	import { createEventDispatcher } from 'svelte';
	import cityStore from '$stores/cityStore';
	const dispatchEvent = createEventDispatcher();
	export let data;
	
	$: if ($cityStore) {
		dispatchEvent('selectedCity', $cityStore.name);
	}
	$: if (data && data.length === 0) {
		cityStore.set(null);
	}
</script>

<div class="flex flex-col align-middle items-start justify-start">
	<p class="mx-2 text-sm font-bold">Cities</p>
	<div>
		{#if data}
			<AutoComplete
				items={data}
				bind:selectedItem={$cityStore}
				labelFieldName="name"
				placeholder="Select City"
				disabled={data === null || (data && data.length === 0)}
				className="w-full md:w-80 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-indigo-200 shadow outline-none  focus:outline-none focus:ring mx-2"
			/>
		{/if}
	</div>
</div>
