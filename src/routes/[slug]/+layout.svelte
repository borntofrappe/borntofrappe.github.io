<script>
	export let data;
	$: entries = data.entries;
</script>

<div>
	<slot />
	<hr />
	<aside>
		{#if entries.length > 0}
			<p>Continue reading? Here the next entries in the log:</p>
			<ul>
				{#each entries as { slug, title }}
					<li>
						<a href="/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		{/if}

		<p>Feeling lost? There's always <a href="/">home</a>.</p>
	</aside>
</div>

<style>
	div {
		max-width: 60ch;
		margin-inline: auto;
	}

	div > :global(* + *) {
		margin-block-start: 0.75em;
	}

	aside > * + * {
		margin-block-start: 0.5em;
	}
</style>
