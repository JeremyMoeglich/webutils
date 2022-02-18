<script lang="ts">
	export let scale: 'fit' | 'fill' = 'fit'
</script>

<div class:fill={scale === 'fill'}>
	<slot />
</div>


<style>
	div {
		width: fit-content;
		height: fit-content;
	}
	.fill {
		width: 100%;
		height: 100%;
	}
</style>