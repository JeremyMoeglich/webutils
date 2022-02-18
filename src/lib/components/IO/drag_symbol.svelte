<script>
	import { lock_grid, unlock_grid } from '$lib/utils/drag';
	const size = 15;
	const style = 'fill:rgb(0,0,0);';
</script>

<div on:mouseleave={lock_grid} on:mouseenter={unlock_grid}>
	<svg width={size} height={size}>
		<rect width={size} height={size / 5} y="0" {style} />
		<rect width={size} height={size / 5} y={(size / 5) * 2} {style} />
		<rect width={size} height={size / 5} y={(size / 5) * 4} {style} />
	</svg>
</div>

<style>
	div {
		width: fit-content;
		height: fit-content;
	}
</style>
