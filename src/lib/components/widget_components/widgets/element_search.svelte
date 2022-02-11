<script lang="ts">
	import { search_molecular_form } from '$lib/chemistry/molecular_formular/find_molecular_form';
	import { parse_molecular_formular } from '$lib/chemistry/molecular_formular/parser';
	import DraggableBox from '$lib/components/draggable_box.svelte';

	import { notes } from '$lib/stores/notes';
	import type { drop_data } from '$lib/utils/drag';
	let search_value = '';

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
		const search_result = search_molecular_form(search_value);
		values = search_result.forEach((match) => {
			const molecular_formular = parse_molecular_formular(match.molecular_form_string);
			let molecular_drop_data: drop_data;
			if (!(molecular_formular instanceof Error)) {
				molecular_drop_data = {
					optional: { molecular_formular: molecular_formular },
					text: match.molecular_form_string
				};
			}
			const real_name_drop_data: drop_data = { text: match.real_name, optional: {} };
			const name_drop_data: drop_data = { text: match.name, optional: {} };
			if (match.name === match.molecular_form_string) {
				
			}
		});
	}
</script>

<DraggableBox drag_data={{ text: search_value, optional: {} }}>
	Element Search: <input type="text" bind:value={search_value} />
</DraggableBox>

<ul>
	{#each search_molecular_form(search_value) as match}
		<div class="match">
			<div on:click={() => ($notes = [...$notes, { text: match.molecular_form_string }])}>
				{#if match.name === match.molecular_form_string}
					<li>
						<DraggableBox drag_data={{ text: match.real_name, optional: {} }}
							>{match.real_name}</DraggableBox
						> - <DraggableBox
							drag_data={{
								text: match.molecular_form_string,
								optional: (() => {
									const molecular_formular = parse_molecular_formular(match.molecular_form_string);
									if (molecular_formular instanceof Error) {
										return {};
									} else {
										return { molecular_formular: molecular_formular };
									}
								})()
							}}>{match.molecular_form_string}</DraggableBox
						>
					</li>
				{:else}
					<li>
						<DraggableBox drag_data={{ text: match.name, optional: {} }}>{match.name}</DraggableBox>
						- <DraggableBox
							drag_data={{
								text: match.molecular_form_string,
								optional: (() => {
									const molecular_formular = parse_molecular_formular(match.molecular_form_string);
									if (molecular_formular instanceof Error) {
										return {};
									} else {
										return { molecular_formular: molecular_formular };
									}
								})()
							}}>{match.molecular_form_string}</DraggableBox
						>
					</li>
				{/if}
			</div>
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
