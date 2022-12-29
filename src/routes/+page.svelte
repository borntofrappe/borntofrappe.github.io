<script>
	export let data;
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Welcome to the little corner on the web of one Gabriele Corti, writing under the handle of borntofrappe."
	/>
</svelte:head>

<h1>Hi there</h1>

<p>Welcome to my static website. Hosted on GitHub Pages. Built with SvelteKit.</p>

{#if data.posts.length > 0}
	<h2>Log</h2>

	<p>
		Hope you won't mind a few verbose entries as I design and develop my own little corner on the
		web.
	</p>

	<ol>
		{#each data.posts as { slug, title, brief, entry }}
			<li value={entry}>
				<h3>
					<a href="/{slug}">{title}</a>
				</h3>
				<p>
					{brief}
				</p>
			</li>
		{/each}
	</ol>
{/if}
