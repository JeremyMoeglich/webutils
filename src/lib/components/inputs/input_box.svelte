<script lang="ts">
	import { drop_data, get_drag_content, set_drag_content } from '$lib/utils/drag';
	import LockDrag from './lock_drag.svelte';
	export let data: drop_data;
	export let note = '';
</script>

<LockDrag>
	<div>
		{#if note}{note}: {/if}
		<input
			type="text"
			bind:value={data.text}
			on:dragstart={event => set_drag_content(event, data)}
			on:drop={(event) => (data = get_drag_content(event))}
		/>
	</div>
</LockDrag>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-between;
		max-width: 99%;
		width: 210px;
		margin: 6px;
		input {
			max-width: 83%;
			width: 200px;
		}
	}
</style>
