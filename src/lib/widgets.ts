import ElementSearch from '$lib/components/widgets/chem/molecular_formular/element_search.svelte';
import MolarCalculator from '$lib/components/widgets/chem/molecular_formular/molar_calculator.svelte';
import MolSolver from '$lib/components/widgets/chem/mol_solver.svelte';
import Calculator from '$lib/components/widgets/math/calculator.svelte';
import Equasion from '$lib/components/widgets/math/equasion.svelte';
import VariableStore from '$lib/components/widgets/util/variable_store.svelte';
import type { SvelteComponent } from 'svelte';

export const widget_list = [
	'element_search',
	'molar_calculator',
	'mol_solver',
	'calculator',
	'equasion_solver',
	'variable_store'
] as const;

export type widget_id = typeof widget_list[number];

export const widgets: Record<
	widget_id,
	{ component: typeof SvelteComponent; min: { h: number; w: number } }
> = {
	element_search: { component: ElementSearch, min: { h: 3, w: 3 } },
	molar_calculator: { component: MolarCalculator, min: { h: 2, w: 3 } },
	mol_solver: { component: MolSolver, min: { h: 3, w: 3 } },
	calculator: { component: Calculator, min: { h: 2, w: 3 } },
	equasion_solver: { component: Equasion, min: { h: 2, w: 3 } },
	variable_store: { component: VariableStore, min: { h: 2, w: 3 } }
};

export interface category {
	name: string;
	elements: Array<category | widget_id>;
	img?: string;
}

export const widget_categories: category = {
	name: 'Widget Categories',
	elements: [
		{
			name: 'Chemistry',
			elements: ['element_search', 'molar_calculator', 'mol_solver']
		},
		{
			name: 'Mathematics',
			elements: ['calculator', 'equasion_solver']
		},
		{
			name: 'Utils',
			elements: []
		}
	]
};
