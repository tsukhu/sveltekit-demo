<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		let data = {};

		try {
			// here you should type your dev.to username
			const res = await fetch(`/api/countries.json`);
			data = await res.json();
		} catch (e) {
			console.log(e);
		}
		// you can pass the `articles` via props like that
		return {
			props: {
				data
			}
		};
	}
</script>
<svelte:head>
	<title>City Weather</title>
</svelte:head>
<script lang="ts">
	import Countries from '$lib/Countries.svelte';
	import Cities from '$lib/Cities.svelte';
	import CityWeather from '$lib/CityWeather.svelte';
	import weatherStore from '../stores/weatherStore';
	export let data;
	let cities = { cities: [] };
	let cityWeather = {};
	const getCities = async (selectedCountry: any) => {
		let data;
		try {
			const res = await fetch(`/api/${selectedCountry}.cities.json`);
			data = await res.json();
		} catch (e) {
			console.log(e);
		}
		return data;
	};

	const getCityWeather = async (selectedCity: any) => {
		let data;
		try {
			const res = await fetch(`/api/${selectedCity}.weather.json`);
			data = await res.json();
		} catch (e) {
			console.log(e);
		}
		return data;
	};
	$: console.log(cities);
</script>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<h1 class="p-2 font-bold text-gray-700">City Weather</h1>
		<div class="flex flex-wrap gap-2">
			<Countries
				{data}
				on:selectedCountry={async (e) => {
					cities = { cities: [] };
					weatherStore.update((state) => {
						state.loading = false;
						state.result = null;
						return state;
					});
					cities = await getCities(e.detail);
				}}
			/>
			<Cities
				data={cities}
				on:selectedCity={async (e) => {
					weatherStore.update((state) => {
						state.loading = true;
						return state;
					});
					cityWeather = await getCityWeather(e.detail);
					weatherStore.update((state) => {
						state.loading = false;
						state.result = cityWeather;
						return state;
					});
				}}
			/>
		</div>
		<div class="flex">
			<CityWeather />
		</div>
	</div>
</div>
