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

<figure style:margin-top="0">
	<blockquote>
		<p>Welcome to a little, pixelated, personal corner on the web.</p>
		<p>
			This is where I jot down a note or through as I further my quest as a software developer. And
			who knows, maybe grow in the process.
		</p>
	</blockquote>
	<figcaption>
		<cite>Gabriele Corti</cite>
	</figcaption>
</figure>

<p />

{#if data.posts.length > 0}
	<h2 class="visually-hidden" style:margin-bottom="0">Log</h2>

	<p>I hope you won't mind a few, rambling entries — there's bound to be more than one.</p>
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
	figure {
		color: hsl(185, 12%, 90%);
		background-color: hsl(176, 28%, 7%);
		font-size: 1.75rem;
		position: relative;
		--inset-size: 10px;
		padding: calc(var(--inset-size) * 2);
	}

	figure::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: currentColor;
		clip-path: polygon(
			0 var(--inset-size),
			var(--inset-size) var(--inset-size),
			var(--inset-size) 0,
			calc(100% - var(--inset-size)) 0,
			calc(100% - var(--inset-size)) var(--inset-size),
			100% var(--inset-size),
			100% calc(100% - var(--inset-size)),
			calc(100% - var(--inset-size)) calc(100% - var(--inset-size)),
			calc(100% - var(--inset-size)) 100%,
			var(--inset-size) 100%,
			var(--inset-size) calc(100% - var(--inset-size)),
			0 calc(100% - var(--inset-size)),
			0 var(--inset-size),
			calc(var(--inset-size) / 2) calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(var(--inset-size) / 2) calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(var(--inset-size) + calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(var(--inset-size) + calc(var(--inset-size) / 2)) calc(100% - calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(100% - calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(100% - calc(var(--inset-size) / 2))
				calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)),
			calc(100% - calc(var(--inset-size) / 2)) calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2))
				calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(100% - var(--inset-size) - calc(var(--inset-size) / 2)) calc(var(--inset-size) / 2),
			calc(var(--inset-size) + calc(var(--inset-size) / 2)) calc(var(--inset-size) / 2),
			calc(var(--inset-size) + calc(var(--inset-size) / 2))
				calc(var(--inset-size) + calc(var(--inset-size) / 2)),
			calc(var(--inset-size) / 2) calc(var(--inset-size) + calc(var(--inset-size) / 2))
		);
	}

	blockquote > * + * {
		margin-top: 0.55em;
	}

	ol > li + li {
		margin-top: 0.75em;
	}
</style>
