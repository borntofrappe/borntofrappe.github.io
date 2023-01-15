<script>
	export let level = 'h1';
</script>

<svelte:element
	this={level}
	style:--inset-size="8px"
	class="notched-frame"
	style:text-align="center"
>
	<slot />
</svelte:element>
