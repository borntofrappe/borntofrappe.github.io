<script>
	import site from '$lib/site.js';
</script>

<svelte:head>
	<title>404 - {site.name}</title>
	<meta
		name="description"
		content="A missing page? Not quite. Here's a nice, pixelated visual instead."
	/>
</svelte:head>

<div class="full-width">
	<div id="sprites" />
</div>

<p>You've found the visual for a missing page...Nicely done.</p>

<p>
	If you don't know where to go from here, there's always a place
	<a href="/">home</a>.
</p>

<style>
	.full-width {
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}

	#sprites {
		margin-inline: auto;
		width: 800px;
		height: 640px;
		background: url('/images/404.png');
		background-size: 800px;
		background-repeat: no-repeat;
		image-rendering: pixelated;
		background-position-y: 0px;
		animation: step-through steps(22) 2s infinite;
		animation-delay: -1s;
	}

	@keyframes step-through {
		to {
			background-position-y: calc(22 * 640px * -1);
		}
	}

	@media (max-width: 800px) {
		#sprites {
			margin-block: calc(1em + 20px);
			width: 400px;
			height: 480px;
			background-position-x: -340px;
			background-position-y: -120px;
			animation: step-through-clipped steps(22) 2s infinite;
			animation-delay: -1s;
			box-shadow: 0 0 0 10px #2e3a1d, 0 0 0 20px #7d8470;
		}

		@keyframes step-through-clipped {
			to {
				background-position-y: calc(22 * 640px * -1 - 120px);
			}
		}
	}

	#sprites {
		animation-play-state: paused;
	}

	@media (prefers-reduced-motion: no-preference) {
		#sprites {
			animation-play-state: running;
		}
	}
</style>
