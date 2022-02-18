<script lang="ts">
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import { nerdamer_to_string } from '$lib/utils/math/nerdamer_utils';
	import nerdamer from 'nerdamer';

	let data: drop_data = { text: '', optional: {} };
	let result: string;
	$: {
		try {
			result = nerdamer_to_string(nerdamer(data.text).evaluate());
		} catch {
			result = 'Invalid';
		}
	}
</script>

<div>
	<InputBox bind:data note={'Expression'} />
	<DraggableBox drag_data={{ text: result, optional: {} }} />
</div>
