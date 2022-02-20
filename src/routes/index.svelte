<script lang="ts">
	import Widget from '$lib/components/widget.svelte';
	import { grid_locked } from '$lib/stores';
	import { typed_entries } from '$lib/utils/general';
	import { widgets } from '$lib/widgets';
	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const id = () =>
		'_' +
		Math.random()
			.toString(36)
			.slice(2, 9 + 2);

	const COLS = 3;

	const current_widgets = widgets;

	function generateLayout() {
		const p = typed_entries(current_widgets).map(([name, data]) => ({
			[COLS]: gridHelp.item({ x: 0, y: 0, w: data.min.w, h: data.min.h, min: data.min }),
			id: id(),
			data: { widget: data.component, name: name }
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
	function isNumeric(value: string | number): boolean {
		return /^-?\d+$/.test(value.toString());
	}

	function set_fixed_to(bool: boolean) {
		items.forEach((obj) => {
			typed_entries(obj)
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
		<Widget child_component={dataItem.data.widget} name={dataItem.data.name} />
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
