<script lang="ts">
	import Cross from '$lib/components/IO/Cross.svelte';
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';
	import LockDrag from '$lib/components/IO/lock_drag.svelte';
	import { drop_data, get_drag_content } from '$lib/utils/drag';

	function add_drop_value(event: DragEvent) {
		values = [...values, get_drag_content(event)];
	}

	let values: Array<drop_data> = [];
</script>

<LockDrag scale="fill">
	<div class="main" on:drop={add_drop_value} on:dragover|preventDefault>
		{#each values as v, i}
			<div class="element">
				<DraggableBox drag_data={v} />
				<Cross
					exec={() => {
						values.splice(i, 1);
						values = values;
					}}
				/>
			</div>
		{/each}
	</div>
</LockDrag>

<style lang="scss">
	.main {
		background-color: antiquewhite;
		width: 100%;
		height: 100%;
	}
	.element {
		display: flex;
	}
</style>
