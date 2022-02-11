<script lang="ts">
	import { calculate_molar_mass } from '$lib/chemistry/molecular_formular/molar_mass';
	import { parse_molecular_formular } from '$lib/chemistry/molecular_formular/parser';
	import DraggableBox from '$lib/components/draggable_box.svelte';

	let value = '';
	$: molar_mass = calculate_molar_mass(value);
</script>

<div>
	<p>
		Summenformel: <input type="text" bind:value />
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
			navigator.clipboard.writeText(value);
		}}
	>
		Copy
	</button>
</div>
