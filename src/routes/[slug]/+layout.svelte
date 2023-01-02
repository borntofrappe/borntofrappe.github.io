<script>
	export let data;
	$: prev = data.prev;
	$: next = data.next;
</script>

<div>
	<slot />

	<aside>
		<h2>More from the log:</h2>
		<ol>
			{#if next}
				<li value={next.entry}>
					<a href="/{next.slug}">{next.title}</a>
				</li>
			{/if}
			{#if prev}
				<li value={prev.entry}>
					<a href="/{prev.slug}">{prev.title}</a>
				</li>
			{/if}
		</ol>
	</aside>
</div>

<style>
	div {
		max-width: 60ch;
		margin-inline: auto;
	}

	div > :global(* + *) {
		margin-top: 0.75em;
	}

	aside {
		margin-top: 2em;
	}

	aside > * + * {
		margin-top: 0.5em;
	}

	a {
		scroll-margin-bottom: 136px;
		scroll-margin-bottom: calc(64px + +8px + 64px);
	}
</style>
