<script lang="ts">
	import { count } from '../stores/counterStore';

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<button
	on:click={decrement}
    disabled={$count <= 0}
	class="m-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 disabled:opacity-25 disabled:cursor-default"
	><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
			clip-rule="evenodd"
		/>
	</svg></button
>
