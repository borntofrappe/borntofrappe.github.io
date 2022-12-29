<script>
	export let data;
</script>

<svelte:head>
	<title>Log entry {data.entry}: {data.title}</title>
</svelte:head>

<main>
	<h1>{data.title}</h1>
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
