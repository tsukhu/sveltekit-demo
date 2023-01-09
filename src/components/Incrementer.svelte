<script lang="ts">
	import { count } from '$stores/counterStore';

	function increment() {
		count.update((n) => n + 1);
	}
</script>

<button on:click={increment} disabled={$count >= 100} class="btn btn-square btn-primary"
	><svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
</button>
