<script lang="ts">
	import ErrorMessage from '$lib/components/IO/error_message.svelte';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import LockDrag from '$lib/components/IO/lock_drag.svelte';
	import { drop_data, get_by_priority } from '$lib/utils/drag';
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
		set_empty(data.optional.mol_attributes, k, get_by_priority(v, ['number']) as string | number);
	});
	let error_message = '';
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
				try {
					data.optional.mol_attributes = await solve_for_mol(data.optional.mol_attributes);
					Object.entries(data.optional.mol_attributes).map(([k, v]) => {
						values[k].text = v.toString();
					});
					error_message = '';
				} catch {
					error_message = 'Invalid Input';
				}
			}}
		>
			Calculate
		</button>
	</LockDrag>
	<ErrorMessage message={error_message} />
	<LockDrag>
		<button
			on:click={async () => {
				Object.keys(values).forEach((k) => {
					values[k].text = '';
				});
			}}
		>
			Clear
		</button>
	</LockDrag>
</div>
