<script lang="ts">
	import SimpleStore from '../../components/SimpleStore.svelte';
	import SEO from '../../components/SEO.svelte';
</script>

<SEO title={'Counter App'} description={'Counter using Store'} />

<div class="flex justify-center align-middle items-center">
	<div class="rounded p-14 px-24 gap-4 shadow-md bg-base-300">
		<SimpleStore />
	</div>
</div>
