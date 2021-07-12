<script lang="ts">
	import SimpleStore from '$lib/SimpleStore.svelte';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO title={'Counter App'} description={'Counter using Store'} />

<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		<SimpleStore />
	</div>
</div>
