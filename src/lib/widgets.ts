import ElementSearch from '$lib/components/widgets/chem/molecular_formular/element_search.svelte';
import MolarCalculator from '$lib/components/widgets/chem/molecular_formular/molar_calculator.svelte';
import MolSolver from '$lib/components/widgets/chem/molecular_formular/mol_solver.svelte';

export const widgets = {
	element_search: { component: ElementSearch, min: { h: 3, w: 3 } },
	molar_calculator: { component: MolarCalculator, min: { h: 3, w: 3 } },
	mol_solver: { component: MolSolver, min: { h: 3, w: 3 } }
} as const;

export type widget_id = keyof typeof widgets;

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
			elements: ['element_search', 'molar_calculator']
		},
		{
			name: 'Mathematics',
			elements: []
		},
		{
			name: 'Utils',
			elements: []
		}
	]
};
