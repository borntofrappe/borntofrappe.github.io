<script>
	export let data;
	import Heading from './Heading.svelte';
	import site from '$lib/site.js';
</script>

<svelte:head>
	<title>{data.title} - {site.name}</title>
	<meta name="description" content="{data.description}." />
</svelte:head>

<main>
	<Heading>
		{data.title}
	</Heading>

	{@html data.html}
</main>

<style>
	main {
		max-width: 60ch;
		margin-inline: auto;
	}

	main :global(p) {
		line-height: 1.5;
	}

	main > :global(* + *) {
		margin-block-start: 0.5em;
	}
</style>
