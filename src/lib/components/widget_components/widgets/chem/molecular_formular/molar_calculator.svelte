<script lang="ts">
	import { calculate_molar_mass } from './molar_mass';
	import DraggableBox from '$lib/components/draggable_box.svelte';
	import InputBox from '$lib/components/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';

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
	<button
		on:click={() => {
			navigator.clipboard.writeText(data.text);
		}}
	>
		Copy
	</button>
</div>
