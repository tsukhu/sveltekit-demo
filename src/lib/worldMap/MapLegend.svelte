<script lang="ts">
	interface LegendOneProps {
		width: number;
		height: number;
		label: string;
	}

	interface LegendTwoProps {
		data: DataProps[];
	}

	interface DataProps {
		circle: CircleProps;
		line: LineProps;
		text: TextProps;
	}

	interface CircleProps {
		cx: number;
		cy: number;
		radius: number;
		fill: string;
		stroke: string;
	}

	interface LineProps {
		x1: number;
		x2: number;
		y1: number;
		y2: number;
		stroke: string;
		strokeDasharray: string;
	}

	interface TextProps {
		x: number;
		y: number;
		alignmentBaseline: string | any;
		val: string;
	}
	export let legendOne: LegendOneProps;
	export let legendTwo: LegendTwoProps;
</script>

<text
	text-anchor="end"
	fill="currentColor"
	x={legendOne.width}
	y={legendOne.height}
	width="100%"
	class="capitalize text-gray-900 text-xs"
>
	{legendOne.label}
</text>

{#each legendTwo.data as { circle, line, text }}
	<circle {...circle} />
	<line {...line} stroke-dasharray={line.strokeDasharray} />
	<text
		{...text}
		alignment-baseline={text.alignmentBaseline}
		class="capitalize text-gray-900 text-xs">{text.val}</text
	>
{/each}
