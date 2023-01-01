<script>
	import weatherStore from '$stores/weatherStore';
	import Loader from './Loader.svelte';
	import { temperatureConverter } from './Weather';
	let value = { result: 'No city selected' };
	$: ({ result, loading } = $weatherStore ? $weatherStore : { result: 'No city selected' });
	$: actual = temperatureConverter(result?.data?.weather?.temperature?.actual);
	$: feelsLike = temperatureConverter(result?.data?.weather?.temperature?.feelsLike);
	$: min = temperatureConverter(result?.data?.weather?.temperature?.min);
	$: max = temperatureConverter(result?.data?.weather?.temperature?.max);
</script>

<div class="p-2 m-2 rounded w-full flex align-middle text-center">
	{#if loading}
		<Loader />
	{:else if result && result.data}
		<div
			class="border w-full items-center align-middle text-left text-sm text-gray-700 flex flex-col p-2 rounded dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
		>
			<div class="w-full relative m-4">
				<p class="font-bold text-md dark:text-gray-200">{result.data.name}</p>
				<div class="text-sm flex justify-between">
					<div class="m-2">
						<p class="text-blue-700 dark:text-gray-200 font-semibold">
							{result.data.weather.summary.title}
						</p>
						<p class="capitalize italic text-xs">{result.data.weather.summary.description}</p>
					</div>
				</div>
				<div class="absolute right-0 -top-2 dark:text-gray-200">
					<img
						src={`http://openweathermap.org/img/wn/${result.data.weather.summary.icon}@2x.png`}
						alt={result.data.weather.summary.title}
					/>
				</div>
			</div>
			<h2 class="capitalize text-gray-700 font-bold text-left items-start p-2 dark:text-gray-200">
				temperature
			</h2>
			<div
				class="w-full flex flex-wrap gap-2 h-auto justify-evenly align-middle items-center text-xs sm:text-sm"
			>
				<div
					class="bg-purple-700 text-gray-100 rounded px-2 sm:flex-1 flex flex-col gap-1 font-thin"
				>
					<div>Actual</div>
					<div class="font-semibold text-center">{actual?.celsius}C | {actual?.fahrenheit}F</div>
				</div>
				<div
					class="bg-indigo-700 text-gray-100 rounded px-2 sm:flex-1 flex flex-col gap-1 font-thin"
				>
					<div>{'Feels Like'}</div>
					<div class="font-semibold text-center">
						{feelsLike?.celsius}C | {feelsLike?.fahrenheit}F
					</div>
				</div>
				<div
					class="bg-pink-700 text-gray-100 rounded px-2 sm:flex-1 flex flex-col  gap-1 font-thin"
				>
					Min <div class="font-semibold text-center">
						{min?.celsius}C | {min?.fahrenheit}F
					</div>
				</div>
				<div class="bg-red-700 text-gray-100 rounded px-2 sm:flex-1 flex flex-col  gap-1 font-thin">
					Max <div class="font-semibold text-center">
						{max?.celsius}C | {max?.fahrenheit}F
					</div>
				</div>
			</div>
		</div>
	{:else if result && result.data === null}
		<p class="text-gray-700 font-semibold text-sm">No Data Available for the city</p>
	{:else}
		<p class="text-gray-700 font-semibold text-sm">{value.result}</p>
	{/if}
</div>
