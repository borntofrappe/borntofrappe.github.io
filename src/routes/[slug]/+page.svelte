<script>
	export let data;
	import Heading from './Heading.svelte';
</script>

<svelte:head>
	<title>Log entry {data.entry}: {data.title}</title>
	<meta name="description" content="{data.title}. {data.brief}." />
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
		margin-top: 0.5em;
	}
</style>
