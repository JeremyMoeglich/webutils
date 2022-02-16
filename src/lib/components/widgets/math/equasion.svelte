<script lang="ts">
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import LockDrag from '$lib/components/IO/lock_drag.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import { nerdamer_to_string } from '$lib/utils/math/nerdamer_utils';
	import nerdamer from 'nerdamer/all.js';
	let data: drop_data = { text: '', optional: {} };
	let result: string;
	let expr = nerdamer('');
	let selected_variable = '';
	$: {
		try {
			expr = nerdamer(data.text);
			const variables = expr.variables();
			if (variables.length > 0) {
				if (variables.length === 1) {
					selected_variable = variables[0];
				}
				const equasion = nerdamer.solve(expr, selected_variable);
				result = nerdamer_to_string(equasion);
			} else {
				result = 'Missing Variable';
			}
		} catch {
			result = 'Invalid';
		}
	}
</script>

<div>
	<InputBox bind:data note={'Equasion'} />
	<DraggableBox drag_data={{ text: result, optional: {} }} />
	<LockDrag>
		{#if expr.variables().length > 1}
			<select name="variables" bind:value={selected_variable}>
				{#each expr.variables() as variable}
					<option value={variable}>{variable}</option>
				{/each}
			</select>
		{/if}
	</LockDrag>
</div>
