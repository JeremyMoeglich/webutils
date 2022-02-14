<script lang="ts">
	import { drop_data, set_drag_content } from '$lib/utils/drag';
	import LockDrag from './lock_drag.svelte';
	export let drag_data: drop_data;
</script>

<LockDrag>
	<div class="main" draggable={true} on:dragstart={(event) => set_drag_content(event, drag_data)}>
		<slot />
	</div>
</LockDrag>

<style>
	.main {
		border: 2px solid red;
		background-color: white;
	}
</style>
