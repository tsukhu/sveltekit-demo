<script lang="ts">
	import { fade } from 'svelte/transition';
	interface CircleProps {
		id: string;
		cx: number;
		cy: number;
		r: number;
		stroke: string;
		strokeWidth: number;
		fillOpacity: number;
	}
	interface DataProps {
		circle: CircleProps;
	}
	export let data: DataProps[];
</script>

<g transition:fade={{ duration: 500 }}>
	{#each data as { circle } (circle.id)}
		<circle
			cx={circle.cx}
			cy={circle.cy}
			r={circle.r}
			stroke={circle.stroke}
			stroke-width={circle.strokeWidth}
			fill-opacity={circle.fillOpacity}
		/>
	{/each}
</g>
