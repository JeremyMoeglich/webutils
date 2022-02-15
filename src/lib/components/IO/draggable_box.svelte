<script lang="ts">
	import { drop_data, set_drag_content } from '$lib/utils/drag';
	import LockDrag from './lock_drag.svelte';
	export let drag_data: drop_data;

	function keypress(event: MouseEvent) {
		navigator.clipboard.writeText(drag_data.text)
	}
</script>

{#if drag_data.text}
	<LockDrag>
		<div class="main" draggable={true} on:click={keypress} on:dragstart={(event) => set_drag_content(event, drag_data)}>
			{drag_data.text}
		</div>
	</LockDrag>
{/if}

<style lang="scss">
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid rgb(75, 7, 92);
		background-color: rgb(53, 2, 2);
		width: fit-content;
		min-width: 30px;
		color: white;
		border-radius: 4px;
		padding: 1px;
		font-size: smaller;
		background: linear-gradient(#68adaf, #331842);
		margin: 5px;
		transition-duration: 100ms;
		&:hover {
			background: linear-gradient(#538586, #35102c);
		}
	}
</style>
