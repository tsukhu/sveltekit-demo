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

<script lang="ts">
	import Countries from '$lib/Countries.svelte';
	import Cities from '$lib/Cities.svelte';
	import CityWeather from '$lib/CityWeather.svelte';
	import weatherStore from '$stores/weatherStore';
	import citiesStore from '$stores/citiesStore';
	export let data;
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
	$: console.log($citiesStore);
	let cities;
	$: cities = $citiesStore?.cities ? $citiesStore?.cities : [];
</script>

<svelte:head>
	<title>City Weather</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<h1 class="p-2 font-bold text-gray-700">City Weather</h1>
		<div class="flex flex-wrap gap-2">
			<Countries
				{data}
				on:selectedCountry={async (e) => {
					if (e.detail === $citiesStore?.countryCode) {
						return;
					}
					citiesStore.set({ countryCode: e.detail, cities: null });
					weatherStore.update((state) => {
						state.loading = false;
						state.result = null;
						return state;
					});
					let data = await getCities(e.detail);
					console.log(data);
					citiesStore.set({ countryCode: e.detail, cities: data.cities });
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
