<script lang="ts">
	import SEO from '$lib/SEO.svelte';
	let y;
</script>

<SEO title={'Parallax'} description={'Parallax'} />

<svelte:window bind:scrollY={y} />
<div
	class="flex justify-center align-middle items-center overflow-auto min-h-[400px] md:min-h-[1000px]"
	id="container"
>
	<section>
		<img
			src="/bg.jpg"
			id="bg"
			alt="background"
			style="transform: translate(0,{-y * 0.5}px); top: {-y * 0.5}px"
		/>
		<img
			src="/moon.png"
			id="moon"
			alt="moon"
			style="transform: translate(0,{-y * 0.5}px); left: {-y * 0.5}px"
		/>
		<img
			src="/mountain.png"
			id="mountain"
			alt="mountain"
			style="transform: translate(0,{-y * 0.5}px); top: {-y * 0.5}px"
		/>
		<img
			src="/road.png"
			id="road"
			alt="road"
			style="transform: translate(0,{-y * 0.5}px); top: {-y * 0.5}px"
		/>
		<h2
			id="text"
			class="relative text-white text-[4rem] font-bold z-[1]"
			style="transform: translate(0,{-y * 1+1}px); top: {-y * 1+1}px"
		>
			Moon Light
		</h2>
	</section>
</div>

<style>
	#container {
		background-color: #0a2a43;
	}
	section {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
		pointer-events: none;
	}

	section:after {
		content: '';
		position: absolute;
		top: 390px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #0a2a43;
		z-index: 10000;
		mix-blend-mode: darken;
	}
	#road {
		z-index: 2;
	}
</style>
