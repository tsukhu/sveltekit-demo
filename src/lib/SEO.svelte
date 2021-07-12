<script lang="ts">
	export let title: string = 'Svelte Kit Demo';
	export let description: string = 'Demo Application';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<html lang="en" />
</svelte:head>
