<script>
	export let level = 'h1';
</script>

<svelte:element this={level} class="heading">
	<slot />
</svelte:element>

<style>
	.heading {
		text-align: center;
		color: var(--grey-000);
		background-color: var(--grey-900);
		position: relative;
		--inset-size: 8px;
		padding: calc(var(--inset-size) * 2);
	}

	.heading::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: currentColor;
		clip-path: polygon(
			0 var(--inset-size),
			var(--inset-size) var(--inset-size),
			var(--inset-size) 0,
			calc(100% - var(--inset-size)) 0,
			calc(100% - var(--inset-size)) var(--inset-size),
			100% var(--inset-size),
			100% calc(100% - var(--inset-size)),
			calc(100% - var(--inset-size)) calc(100% - var(--inset-size)),
			calc(100% - var(--inset-size)) 100%,
			var(--inset-size) 100%,
			var(--inset-size) calc(100% - var(--inset-size)),
			0 calc(100% - var(--inset-size)),
			0 var(--inset-size),
			calc(var(--inset-size) / 2) calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(var(--inset-size) / 2) calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(var(--inset-size) + calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(var(--inset-size) + calc(var(--inset-size) / 2)) calc(100% - calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(100% - calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(100% - calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(100% - calc(var(--inset-size) / 2)) calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)) calc(var(--inset-size) / 2),
			calc(var(--inset-size) + calc(var(--inset-size) / 2)) calc(var(--inset-size) / 2),
			calc(var(--inset-size) + calc(var(--inset-size) / 2))
				calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(var(--inset-size) / 2) calc(var(--inset-size) + calc(var(--inset-size) / 2))
		);
	}

	.heading ::selection {
		color: var(--main-color-000);
		background: var(--main-color-700);
	}
</style>
