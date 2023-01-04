<script>
	export let level = 'h1';
</script>

<svelte:element this={level} style:--inset-size="8px" class="notched-frame heading">
	<slot />
</svelte:element>

<style>
	.heading {
		text-align: center;
	}
</style>
