<script lang="ts">
	import { drop_data, get_drag_content } from '$lib/utils/drag';
	export let data: drop_data;
</script>

<input
	type="text"
	bind:value={data.text}
	on:drop={(event) => (data = get_drag_content(event))}
/>
