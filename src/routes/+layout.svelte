<script>
	import '$lib/styles/global.css';
</script>

<div id="root">
	<div class="wrapper">
		<slot />
	</div>

	<div id="sprites" />
</div>

<style>
	#root {
		color: hsl(120, 33%, 11%);
		background-color: hsl(120, 12%, 67%);
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TxVIqDnYQdchQnSxIFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APE0clJ0UVK/F9SaBHjwXE/3t173L0DhGaVqWbPJKBqlpFOxMVcflXse0UIIwgigJjETD2ZWczCc3zdw8fXuyjP8j735+hXCiYDfCLxHNMNi3iDeGbT0jnvE4dZWVKIz4knDLog8SPXZZffOJccFnhm2Mim54nDxGKpi+UuZmVDJZ4mjiiqRvlCzmWF8xZntVpn7XvyF4YK2kqG6zRHkcASkkhBhIw6KqjCQpRWjRQTadqPe/iHHX+KXDK5KmDkWEANKiTHD/4Hv7s1i1MxNykUB3pfbPtjDOjbBVoN2/4+tu3WCeB/Bq60jr/WBGY/SW90tMgRMLANXFx3NHkPuNwBhp50yZAcyU9TKBaB9zP6pjwweAsE19ze2vs4fQCy1NXyDXBwCIyXKHvd492B7t7+PdPu7weat3K3lWHSdwAAAAZiS0dEAAEAAQABsubIbgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YMGwoJFf+ptdQAAAA2SURBVAjXBcHBDcAwDMQw1defsz+QHTKilZZ89tmfV1KhV1NeAfDKzFCpAJAKKm+vZmZQScIPaoEYCqgtEKMAAAAASUVORK5CYII=);
		background-size: 16px;
		image-rendering: crisp-edges;
		min-height: 100vh;
		position: relative;
		z-index: 0;
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
		background-image: url('/images/spritesheet.png');
		background-position-y: -264px;
	}

	#sprites::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 0%;
		width: 100%;
		height: 8px;
		background-image: url('/images/spritesheet.png');
		background-position-y: -256px;
	}

	#sprites::after {
		content: '';
		position: absolute;
		bottom: 100%;
		bottom: calc(100% + 8px);
		left: 8px;
		width: 64px;
		height: 64px;
		background-image: url('/images/spritesheet.png');
		background-position-y: 0px;
	}

	.wrapper {
		max-width: 58rem;
		width: 90vw;
		margin-inline: auto;
		padding-block: 1rem;
	}

	.wrapper > :global(* + *) {
		margin-top: 0.75em;
	}
</style>
