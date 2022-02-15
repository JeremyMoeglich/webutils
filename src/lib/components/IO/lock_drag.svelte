<script>
	import { lock_grid, unlock_grid } from '$lib/utils/drag';
</script>

<div on:mouseenter={lock_grid} on:mouseleave={unlock_grid}>
	<slot />
</div>


<style>
	div {
		width: fit-content;
		height: fit-content;
	}
</style>