<script lang="ts">
	import { parse_molecular_formular } from '../../../../utils/chem/molecular_formular/parser';
	import InputBox from '$lib/components/IO/input_box.svelte';
	import type { drop_data } from '$lib/utils/drag';
	import { calculate_molar_mass } from '../../../../utils/chem/molecular_formular/molar_mass';
	import { search_molecular_form } from '$lib/utils/chem/molecular_formular/search';
	import DraggableBox from '$lib/components/IO/draggable_box.svelte';

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
		try {
			const search_result = search_molecular_form(data.text);
			values = search_result.map((match) => {
				const molecular_formular = parse_molecular_formular(match.molecular_form_string);
				if (molecular_formular instanceof Error) {
					throw molecular_formular;
				}
				let molar_mass = calculate_molar_mass(molecular_formular);
				if (molar_mass instanceof Error) {
					throw molar_mass;
				}
				const molecular_drop_data: drop_data = {
					optional: { molecular_formular: molecular_formular, number: molar_mass },
					text: match.molecular_form_string
				};

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
		} catch {}
	}
</script>

<div class="alignment">
	<InputBox bind:data />
	<div class="results">
		{#each values as row}
			<div class="match">
				<DraggableBox drag_data={row.left.drop_data} />
				-
				<DraggableBox drag_data={row.right.drop_data} />
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
