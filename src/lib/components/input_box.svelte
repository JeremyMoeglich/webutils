<script lang="ts">
	import { drop_data, get_drag_content, lock_grid, unlock_grid } from '$lib/utils/drag';
	export let data: drop_data;
</script>

<input
	type="text"
	bind:value={data.text}
	on:drop={(event) => (data = get_drag_content(event))}
	on:mouseenter={lock_grid}
	on:mouseleave={unlock_grid}
/>
