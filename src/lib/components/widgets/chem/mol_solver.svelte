<script lang="ts">
	import ErrorMessage from '$lib/components/IO/error_message.svelte';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import LockDrag from '$lib/components/IO/lock_drag.svelte';
	import { mol_symbol_type, solve_for_mol } from '$lib/utils/chem/mol/solve_for_mol';
	import { drop_data, get_by_priority, optional_drop_data } from '$lib/utils/drag';
	import { set_empty, typed_entries, typed_keys } from '$lib/utils/general';

	let data: drop_data = { text: '', optional: { mol_attributes: {} } };

	const values: Record<mol_symbol_type, drop_data> = {
		n: { text: '', optional: {} },
		m: { text: '', optional: {} },
		M: { text: '', optional: {} },
		c: { text: '', optional: {} },
		V: { text: '', optional: {} }
	};

	async function calculate() {
		try {
			data.optional.mol_attributes = await solve_for_mol(data.optional.mol_attributes);
			typed_entries(data.optional.mol_attributes).map(([k, v]) => {
				values[k].text = v.toString();
			});
			error_message = '';
		} catch {
			error_message = 'Invalid Input';
		}
	}
	$: typed_entries(values).map(([k, v]) => {
		set_empty(data.optional.mol_attributes, k, Number(get_by_priority(v, ['number'])));
	});
	let error_message = '';
	const value_priority: Array<keyof optional_drop_data> = ['number'];
</script>

<div>
	{#each typed_keys(values) as char}
		<InputBox bind:data={values[char]} note={char} priority={value_priority} exec={calculate} />
	{/each}

	<LockDrag>
		<button on:click={calculate}> Calculate </button>
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
