<script lang="ts">
	import { drop_data, set_drag_content } from '$lib/utils/drag';
	import LockDrag from './lock_drag.svelte';
	export let drag_data: drop_data;
</script>

<LockDrag>
	<div draggable={true} on:dragstart={(event) => set_drag_content(event, drag_data)}>
		<slot />
	</div>
</LockDrag>
