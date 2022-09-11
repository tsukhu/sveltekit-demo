<script >

	import SEO from '$lib/SEO.svelte';

</script>

<SEO title={'About'} description={'About Page'} />

<div class="about-section">
	<div class="inner-container">
		<h1>SvelteKit Experiments</h1>
		<p class="text">
			SvelteKit is revolutionizing the way we build modern web applications. This project tries to
			uncover the power of the framework by covering most of the key features via a set of samples.
			Also to give back to the community a reference that can be leveraged based on your specific
			usecase. This will remain an on-going process of learning , refactoring and improving. Any
			contributions are welcome.
		</p>
		<a class="project" href="https://github.com/tsukhu/sveltekit-demo" target="_blank">
			<span>https://github.com/tsukhu/sveltekit-demo</span>
		</a>
		<p class="credits">
			Photo by <a
				href="https://unsplash.com/@flowforfrank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Ferenc Almasi</a
			>
			on
			<a
				href="https://unsplash.com/s/photos/svelte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</div>
</div>

<style>
	.about-section {
		background: url(/svelte.jpg) no-repeat left;
		background-size: 100%;
		overflow: hidden;
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem;
	}

	.inner-container {
		width: 55%;
		float: right;
		background-color: #f7f1f1;
		padding: 100px;
		border-radius: 1rem;
	}

	.inner-container h1 {
		margin-bottom: 30px;
		font-size: 30px;
		font-weight: 900;
		color: #464646;
	}

	.text {
		font-size: 13px;
		color: #545454;
		line-height: 30px;
		text-align: justify;
		margin-bottom: 40px;
	}

	.project {
		display: flex;
    	color: #545454;
		justify-content: space-between;
		font-weight: 400;
		font-size: 13px;
	}

    .credits {
        color: #545454;
        padding: 1rem 0;
        font-weight: 400;
		font-size: 12px;
    }

    a:hover {
        color: #383838;
        font-weight: 500;
    }

	@media screen and (max-width: 1200px) {
		.inner-container {
			padding: 80px;
		}
	}

	@media screen and (max-width: 1000px) {
		.about-section {
			background-size: 100%;
			padding: 0px 40px;
		}
		.inner-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			margin: 1rem 0;
			border-radius: 1rem;
		}
		.text {
			font-size: 12px;
		}
        .project {
            font-weight: 700;
			font-size: 12px;
		}
	}

	@media screen and (max-width: 600px) {
		.about-section {
			padding: 0;
		}
		.inner-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			margin: 1rem 0;
			border-radius: 1rem;
		}
		.text {
			font-size: 10px;
		}
		.project {
            font-weight: 700;
			font-size: 10px;
		}
	}
</style>
