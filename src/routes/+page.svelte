<script>
	import site from '$lib/site.js';
	const { name, description } = site;

	export let data;
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
</svelte:head>

<h1 class="visually-hidden">Hi there!</h1>

<figure style:margin-top="0" class="notched-frame">
	<blockquote>
		<p>Welcome to a pixelated, personal corner on the web.</p>
		<p>This is where I jot down a note or two as I further my quest as a game developer.</p>
	</blockquote>
	<figcaption>
		<cite>Gabriele Corti</cite>
	</figcaption>
</figure>

<hr />

{#if data.entries.length > 0}
	<h2 class="visually-hidden">Log</h2>

	<p style:margin-top="0">
		Hope you won't mind a few rambling entries, cause this log's going to be choke full of them!
	</p>

	<ul>
		{#each data.entries as { slug, title, description }}
			<li>
				<h3>
					<a href="/{slug}">{title}</a>
				</h3>
				<p>
					{description}
				</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	blockquote > * + * {
		margin-block-start: 0.5em;
	}

	ul > li + li {
		margin-block-start: 0.5em;
	}
</style>
