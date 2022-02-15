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
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid rgb(252, 140, 140);
		background-color: rgb(53, 2, 2);
		width: fit-content;
		min-width: 30px;
		color: white;
		border-radius: 4px;
		padding: 1px;
		font-size: smaller;
		background: linear-gradient(#863c3c, #331842);
		margin: 5px;
	}
</style>
