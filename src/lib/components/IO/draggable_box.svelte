<script lang="ts">
	import type { drop_data } from '$lib/utils/drag';
	import DragComponent from './drag_component.svelte';
	export let drag_data: drop_data;

	function keypress(event: MouseEvent) {
		navigator.clipboard.writeText(drag_data.text);
	}
</script>

{#if drag_data.text}
	<DragComponent bind:drag_data>
		<button class="main" on:click={keypress}>
			{drag_data.text}
		</button>
	</DragComponent>
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
