<script>
	export let data;
	$: entries = data.entries;
</script>

<div>
	<slot />

	{#if entries.length > 0}
		<hr />

		<aside>
			<h2>More from the log:</h2>
			<ol>
				{#each entries as { entry, slug, title }}
					<li value={entry}>
						<a href="/{slug}">{title}</a>
					</li>
				{/each}
			</ol>
		</aside>
	{/if}
</div>

<style>
	div {
		max-width: 60ch;
		margin-inline: auto;
	}

	div > :global(* + *) {
		margin-top: 0.75em;
	}

	aside > * + * {
		margin-top: 0.5em;
	}
</style>
