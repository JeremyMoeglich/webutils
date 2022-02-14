<script lang="ts">
	import DraggableBox from '$lib/components/draggable_box.svelte';
	import InputBox from '$lib/components/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import { mol_symbol_type, solve_for_mol } from './solve_for_mol';

	let data: drop_data = { text: '', optional: { mol_attributes: {} } };

	const values: Record<mol_symbol_type, drop_data> = {
		n: { text: '', optional: {} },
		m: { text: '', optional: {} },
		M: { text: '', optional: {} },
		c: { text: '', optional: {} },
		V: { text: '', optional: {} }
    };

    
</script>

<div>
	<InputBox data={values.n} note="n" />
	<InputBox data={values.m} note="m" />
	<InputBox data={values.M} note="M" />
	<InputBox data={values.c} note="c" />
	<InputBox data={values.V} note="V" />

	<button
		on:click={() => {
			data.optional.mol_attributes = solve_for_mol(data.optional.mol_attributes);
            Object.entries(data.optional.mol_attributes).map(([k,v]) => {values[k] = v.toString()})
		}}
	>
		Calculate
	</button>
</div>
