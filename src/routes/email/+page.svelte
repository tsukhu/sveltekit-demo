<script lang="ts">
	import { validator } from '$actions/validate';
	import SEO from '$lib/SEO.svelte';
	let [isValid, validate] = validator();
	let email = null;
</script>

<SEO title={'Email Validator'} description={'Email Validation App'} />


<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		<input
			use:validate
			type="text"
			bind:value={email}
			placeholder="Enter Valid Email Address"
			class="px-2 py-3 w-80 placeholder-blueGray-300 text-blueGray-600 relative  border-1 dark:border-gray-700 mx-2  md:w-80 placeholder-blue-600 dark:placeholder-blue-200 text-blue-800 dark:text-blue-200 bg-white dark:bg-gray-700 rounded text-sm border border-indigo-200 shadow outline-none  focus:outline-none focus:ring "
		/>

		{#if $isValid}
			<p class="px-2 mt-2 text-sm text-green-500 dark:text-green-400">Thats a valid email</p>
		{:else}
			<p class="px-2 mt-2 text-sm text-red-700 dark:text-red-400">Enter a valid email</p>
		{/if}
	</div>
</div>
