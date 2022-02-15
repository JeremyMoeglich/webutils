<script lang="ts">
	import { parse_molecular_formular } from './parser';
	import { search_molecular_form } from './find_molecular_form';
	import InputBox from '$lib/components/inputs/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import DraggableBox from '$lib/components/inputs/draggable_box.svelte';

	let data: drop_data = { text: 'Salzs', optional: {} };

	interface row {
		left: {
			drop_data: drop_data;
			text: string;
		};
		right: {
			drop_data: drop_data;
			text: string;
		};
	}

	let values: Array<row>;
	$: {
		const search_result = search_molecular_form(data.text);
		values = search_result.map((match) => {
			const molecular_formular = parse_molecular_formular(match.molecular_form_string);
			let molecular_drop_data: drop_data;
			if (!(molecular_formular instanceof Error)) {
				molecular_drop_data = {
					optional: { molecular_formular: molecular_formular },
					text: match.molecular_form_string
				};
			}
			if (match.name === match.molecular_form_string) {
				const real_name_drop_data: drop_data = { text: match.real_name, optional: {} };
				return {
					left: {
						text: match.real_name,
						drop_data: real_name_drop_data
					},
					right: {
						text: match.molecular_form_string,
						drop_data: molecular_drop_data
					}
				};
			} else {
				const name_drop_data: drop_data = { text: match.name, optional: {} };
				return {
					left: {
						text: match.name,
						drop_data: name_drop_data
					},
					right: {
						text: match.molecular_form_string,
						drop_data: molecular_drop_data
					}
				};
			}
		});
	}
</script>

<div class="alignment">
	Element Search: <InputBox bind:data />
	<div class="results">
		{#each values as row}
			<div class="match">
				<DraggableBox drag_data={row.left.drop_data}>{row.left.text}</DraggableBox>
				-
				<DraggableBox drag_data={row.right.drop_data}>{row.right.text}</DraggableBox>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.results {
		display: flex;
		flex-direction: column;
		gap: 5px;
		max-width: max-content;
		padding-top: 6px;
	}
	.match {
		display: flex;
		justify-content: center;
		gap: 3px;
	}
</style>
