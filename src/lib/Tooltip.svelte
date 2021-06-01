<script lang="ts">
	import { fade } from 'svelte/transition';
	export let text = 'wow tooltip';
</script>

<span
	in:fade
	class="absolute bg-gray-50 text-gray-700 text-xs px-2 rounded bottom--2 right-0 z-50 font-thin shadow"
	>{text}</span
>
