<script lang="ts">
	import { count } from '../stores/counterStore';

	function increment() {
		count.update((n) => n + 1);
	}
</script>

<button
	on:click={increment}
    disabled={$count >= 100}
	class="m-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-25 disabled:cursor-default"
	><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
			clip-rule="evenodd"
		/>
	</svg></button
>
