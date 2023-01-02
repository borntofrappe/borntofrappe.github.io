<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Status code {$page.status}</title>
	<meta name="description" content="Status code {$page.status}. Something went quite wrong." />
</svelte:head>

<h1>{$page.status}</h1>

<p>Something went quite wrong...Here's the error message to guide you:</p>

<p>
	<mark>{$page.error.message}</mark>
</p>

<p>
	If you don't know where to start, there's always a place <a href="/">home</a>.
</p>

<style>
	mark {
		background: hsl(21, 100%, 59%);
	}

	mark::before {
		content: '> ';
	}
</style>
