<script lang="ts">
	import InputBox from '$lib/components/inputs/input_box.svelte';
	import LockDrag from '$lib/components/inputs/lock_drag.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import { set_empty } from '$lib/utils/general';
	import { mol_symbol_type, solve_for_mol } from './solve_for_mol';

	let data: drop_data = { text: '', optional: { mol_attributes: {} } };

	const values: Record<mol_symbol_type, drop_data> = {
		n: { text: '', optional: {} },
		m: { text: '', optional: {} },
		M: { text: '', optional: {} },
		c: { text: '', optional: {} },
		V: { text: '', optional: {} }
	};

	$: Object.entries(values).map(([k, v]) => {
		set_empty(data.optional.mol_attributes, k, parseFloat(v.text));
	});
</script>

<div>

	<InputBox bind:data={values.n} note="n" />
	<InputBox bind:data={values.m} note="m" />
	<InputBox bind:data={values.M} note="M" />
	<InputBox bind:data={values.c} note="c" />
	<InputBox bind:data={values.V} note="V" />

	<LockDrag>
		<button
			on:click={async () => {
				data.optional.mol_attributes = await solve_for_mol(data.optional.mol_attributes);
				Object.entries(data.optional.mol_attributes).map(([k, v]) => {
					values[k].text = v.toString();
				});
			}}
		>
			Calculate
		</button>
	</LockDrag>
	<LockDrag>
		<button
			on:click={async () => {
				Object.keys(values).forEach((k) => {values[k].text = ''})
			}}
		>
			Clear
		</button>
	</LockDrag>
</div>
