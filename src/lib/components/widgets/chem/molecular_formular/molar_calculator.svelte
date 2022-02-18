<script lang="ts">
	import InputBox from '$lib/components/IO/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import LockDrag from '$lib/components/IO/lock_drag.svelte';
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';
import { calculate_molar_mass } from '$lib/utils/chem/molecular_formular/molar_mass';

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
	/>
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

<style>
	p {
		margin-top: 0px;
	}
</style>