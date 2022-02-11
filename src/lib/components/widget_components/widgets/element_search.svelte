<script lang="ts">
	import { search_molecular_form } from '$lib/chemistry/molecular_formular/find_molecular_form';
	import { parse_molecular_formular } from '$lib/chemistry/molecular_formular/parser';
	import DraggableBox from '$lib/components/draggable_box.svelte';
	import InputBox from '$lib/components/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	let data: drop_data = { text: '', optional: {} };

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

Element Search: <InputBox bind:data />
<ul>
	{#each values as row}
		<div class="match">
			<DraggableBox drag_data={row.left.drop_data}>{row.left.text}</DraggableBox>
			-
			<DraggableBox drag_data={row.right.drop_data}>{row.right.text}</DraggableBox>
		</div>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.match {
		display: flex;
		gap: 7px;
	}
</style>
