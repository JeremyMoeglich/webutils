<script lang="ts">
	import { drop_data, set_drag_content } from '$lib/utils/drag';

	export let drag_data: drop_data;
</script>

<div class="main" draggable={true} on:dragstart={(event) => set_drag_content(event, drag_data)}>
	<slot />
</div>

<style>
	.main {
		border: 2px solid red;
	}
</style>
