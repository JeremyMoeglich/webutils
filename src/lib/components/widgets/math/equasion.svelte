<script lang="ts">
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import type { Expression } from 'nerdamer';
	import nerdamer from 'nerdamer/all.js';

	let data: drop_data = { text: '', optional: {} };
	let result: string;
	$: {
		try {
			const equasion = nerdamer.solve(data.text, 'x');
			result = equasion.text.toString();
		} catch {
			result = 'Invalid';
		}
	}
</script>

<div>
	<InputBox bind:data note={'Expression'} />
	<DraggableBox drag_data={{ text: result, optional: {} }} />
</div>
