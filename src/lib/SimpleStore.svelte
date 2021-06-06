<script type="ts">
	import { count } from '../stores/counterStore';
	import Incrementer from '$lib/Incrementer.svelte';
	import Decrementer from '$lib/Decrementer.svelte';
	import Resetter from '$lib/Resetter.svelte';
</script>

<h2 class="font-bold text-center align-middle text-gray-800">Simple Store App</h2>
<h3 class="text-gray-700 mx-2 mt-2 flex align-middle items-center justify-between">The count is <div class="ml-2 text-6xl font-semibold">{$count}</div></h3>
<div class="flex justify-between mt-2">
<Incrementer />
<Decrementer />
<Resetter />
</div>