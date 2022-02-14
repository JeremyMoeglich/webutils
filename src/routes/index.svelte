<script lang="ts">
	import Widget from '$lib/components/widget.svelte';
	import ElementSearch from '$lib/components/widgets/chem/molecular_formular/element_search.svelte';
	import MolarCalculator from '$lib/components/widgets/chem/molecular_formular/molar_calculator.svelte';
	import MolSolver from '$lib/components/widgets/chem/molecular_formular/mol_solver.svelte';
	import { grid_locked } from '$lib/stores';
	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const id = () =>
		'_' +
		Math.random()
			.toString(36)
			.substring(2, 9 + 2);

	const COLS = 3;

	const current_widgets = [ElementSearch, MolarCalculator, MolSolver];

	function generateLayout() {
		const p = current_widgets.map((w) => ({
			[COLS]: gridHelp.item({ x: 0, y: 0, w: 3, h: 3, min: { w: 2, h: 2 } }),
			id: id(),
			data: { widget: w }
		}));
		return p;
	}
	let items: Array<{
		[COLS]: {
			fixed: boolean;
			resizeable: boolean;
			draggable: boolean;
			customDragger: boolean;
			customResizer: boolean;
			min: { w: number; h: number };
			max: { w: number; h: number };
			x: number;
			y: number;
			w: number;
			h: number;
		};
	}> = gridHelp.adjust(generateLayout(), COLS);

	const width_to_cols = [
		[1600, 18],
		[1424, 15],
		[1100, 12],
		[820, 9],
		[640, 6],
		[400, 3]
	];
	function isNumeric(value: string): boolean {
		return /^-?\d+$/.test(value);
	}

	function set_fixed_to(bool: boolean) {
		items.forEach((obj) => {
			Object.entries(obj)
				.filter(([key]) => isNumeric(key))
				.forEach(([, value]) => {
					value.draggable = bool;
				});
		});
		items = items;
	}

	$: $grid_locked ? set_fixed_to(false) : set_fixed_to(true);
</script>

<div class="grid">
	<Grid bind:items cols={width_to_cols} rowHeight={90} gap={[5, 5]} let:dataItem>
		<Widget child_component={dataItem.data.widget} />
	</Grid>
</div>

<style>
	.grid {
		width: 100%;
		height: 100%;
	}
	:global(body) {
		overflow-y: scroll;
	}
	:global(.svlt-grid-resizer::after) {
		border-color: white !important;
	}
	:global(.svlt-grid-shadow) {
		border-radius: 6px;
	}
	:global(.svlt-grid-item) {
		border-radius: 6px;
	}
</style>
