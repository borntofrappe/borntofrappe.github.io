<script>
	export let data;
</script>

<svelte:head>
	<title>Gabriele's Pixelated Corner</title>
	<meta
		name="description"
		content="Welcome to the little, pixelated corner on the web devoted to the ramblings and verbose entries of one Gabriele Corti."
	/>
</svelte:head>

<h1 class="visually-hidden">Hi there!</h1>

<figure style:margin-top="0" class="notched-frame">
	<blockquote>
		<p>Welcome to a little, pixelated, personal corner on the web.</p>
		<p>
			This is where I jot down a note or two as I further my quest as a software developer. And who
			knows, maybe grow in the process.
		</p>
	</blockquote>
	<figcaption>
		<cite>Gabriele Corti</cite>
	</figcaption>
</figure>

<hr />

{#if data.posts.length > 0}
	<h2 class="visually-hidden">Log</h2>

	<p style:margin-top="0">
		Hope you won't mind a few rambling entries, cause this log's choke full of them!
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

<style>
	blockquote > * + * {
		margin-top: 0.5em;
	}

	ol > li + li {
		margin-top: 0.75em;
	}
</style>
