<script type="ts">
	import { validator } from '../actions/validate';

	let [isValid, validate] = validator();
	let email = null;
</script>

<svelte:head>
	<title>Email Validator</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<input
			use:validate
			type="text"
			bind:value={email}
			placeholder="Enter Valid Email Address"
			class="px-2 py-3 w-80 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-1 border-indigo-200 shadow outline-none  focus:outline-none focus:ring mx-2"
		/>

		{#if $isValid}
			<p class="px-2 mt-2 text-sm text-green-500">Thats a valid email</p>
		{:else}
			<p class="px-2 mt-2 text-sm text-red-700">Enter a valid email</p>
		{/if}
	</div>
</div>
