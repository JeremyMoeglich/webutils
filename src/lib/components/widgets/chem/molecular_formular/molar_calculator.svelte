<script lang="ts">
	import { calculate_molar_mass } from './molar_mass';
	import DraggableBox from '$lib/components/inputs/draggable_box.svelte';
	import InputBox from '$lib/components/inputs/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import LockDrag from '$lib/components/inputs/lock_drag.svelte';

	let data: drop_data = { text: '', optional: {} };
	$: molar_mass = calculate_molar_mass(data.text);
</script>

<div>
	<p>
		Summenformel: <InputBox bind:data />
	</p>
	<DraggableBox
		drag_data={{
			text: molar_mass.toString(),
			optional: { number: molar_mass instanceof Error ? 0 : molar_mass }
		}}
	>
		{molar_mass}
	</DraggableBox>
	<LockDrag>
		<button
			on:click={() => {
				navigator.clipboard.writeText(data.text);
			}}
		>
			Copy
		</button>
	</LockDrag>
</div>
