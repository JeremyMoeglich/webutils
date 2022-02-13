<script lang="ts">
	import { drop_data, lock_grid, set_drag_content, unlock_grid } from '$lib/utils/drag';
	export let drag_data: drop_data;
</script>

<div
	class="main"
	draggable={true}
	on:mouseenter={lock_grid}
	on:mouseleave={unlock_grid}
	on:dragstart={(event) => set_drag_content(event, drag_data)}
>
	<slot />
</div>

<style>
	.main {
		border: 2px solid red;
		background-color: white;
	}
</style>
