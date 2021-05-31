<script lang="ts">
	import { count } from '../stores';

	function reset() {
		count.set(0);
	}
</script>

<button
	on:click={reset}
	type="button"
	class="m-2 inline-flex  items-center justify-center px-5 py-3 border border-indigo-200 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
	><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
		<path
			fill-rule="evenodd"
			d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
			clip-rule="evenodd"
		/>
	</svg></button
>
