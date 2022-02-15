<script>
	export let message;
</script>

{#if message}
	<p>{message}</p>
{/if}

<style>
	p {
		color: red;
	}
</style>
