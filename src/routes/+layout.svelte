<script>
	import '$lib/styles/global.css';
	import '$lib/styles/style.css';

	import { onMount } from 'svelte';

	let step = false;

	onMount(() => {
		let stopRate = 100;
		let timeout = null;

		const stepThrough = () => {
			clearTimeout(timeout);
			step = true;

			timeout = setTimeout(() => {
				clearInterval(timeout);
				step = false;
			}, stopRate);
		};

		const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		if (!prefersReducedMotion.matches) {
			window.addEventListener('scroll', stepThrough);
		}

		prefersReducedMotion.addEventListener('change', ({ matches }) => {
			if (matches) {
				window.removeEventListener('scroll', stepThrough);
			} else {
				window.addEventListener('scroll', stepThrough);
			}
		});

		return () => clearTimeout(timeout);
	});
</script>

<div id="root">
	<div class="wrapper">
		<slot />
	</div>

	<div id="sprites" class:step />
</div>

<style>
	#root {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAgMAAADUn3btAAAADFBMVEW/w7m+wLi8vra4vbLVDp++AAAAEElEQVR42mNYwTCXYT+DLAAKCwIiOKegQQAAAABJRU5ErkJggg==);
		background-size: 16px;
		image-rendering: crisp-edges;
		min-height: 100vh;
		position: relative;
		z-index: 0;
		margin-block-end: 136px;
		margin-block-end: calc(64px + +8px + 64px);
	}

	#root::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: inherit;
		background-image: inherit;
		background-size: inherit;
		image-rendering: inherit;
		z-index: -1;
	}

	#sprites {
		position: fixed;
		bottom: 0;
		height: 64px;
		width: 100%;
		background-color: inherit;
		background-image: inherit;
		background-image: url('/images/index.png');
		background-position-y: -264px;
		background-size: 64px;
		image-rendering: pixelated;
	}

	#sprites::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 0%;
		width: 100%;
		height: 8px;
		background-image: url('/images/index.png');
		background-position-y: -256px;
		background-size: 64px;
		image-rendering: pixelated;
	}

	#sprites::after {
		content: '';
		position: absolute;
		bottom: 100%;
		bottom: calc(100% + 8px);
		left: 8px;
		width: 64px;
		height: 64px;
		background-image: url('/images/index.png');
		background-position-y: 0px;
		background-size: 64px;
		image-rendering: pixelated;
	}

	.wrapper {
		max-width: 60ch;
		width: 95vw;
		margin-inline: auto;
		padding-block: 1rem;
	}

	.wrapper > :global(* + *) {
		margin-block-start: 0.75em;
	}

	@media (prefers-reduced-motion: no-preference) {
		#sprites {
			/* 4.4s = 0.8s  / 4 * 22 */
			animation: step-field 4.4s steps(22) infinite;
		}

		#sprites::after {
			animation: step-character 0.8s steps(4) infinite;
		}

		#sprites,
		#sprites::after {
			animation-play-state: paused;
		}

		#sprites.step,
		#sprites.step::after {
			animation-play-state: running;
		}

		@keyframes step-character {
			to {
				background-position-y: -256px;
			}
		}

		@keyframes step-field {
			to {
				background-position-y: -352px;
			}
		}
	}
</style>
