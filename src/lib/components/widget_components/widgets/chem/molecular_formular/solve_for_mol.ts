import { difference, intersection } from 'lodash';
import nerdamer from 'nerdamer/all';
import type { Expression } from 'nerdamer'

export const mol_symbols = ['n', 'm', 'M', 'V', 'c'] as const;
export type mol_symbol_type = typeof mol_symbols[number];
export type element_mol_attributes = Partial<Record<mol_symbol_type, number>>;

interface equasion_type<T> {
	expr: string;
	values: Array<T>;
}

const equasions: Array<equasion_type<mol_symbol_type>> = [
	{
		expr: 'n=m/M',
		values: ['n', 'M', 'm']
	},
	{
		expr: 'n=c/V',
		values: ['n', 'c', 'V']
	}
];
const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

export function solve_for_mol(mol_attributes: element_mol_attributes): element_mol_attributes {
	let changed = false;
	equasions.forEach((equasion) => {
		const diff = difference(
			intersection(getKeys(mol_attributes), equasion.values),
			equasion.values
		);
        if (diff.length === 1) {
            const r: Expression = nerdamer.solve(equasion.expr, diff[0]).evaluate(mol_attributes)
            const v = r.valueOf()
            if (typeof v === 'number') {
                changed = true
                mol_attributes[diff[0]] = v
            } else {
                throw "returned string need number"
            }
        }
	});
    if (changed) {
        mol_attributes = solve_for_mol(mol_attributes)
    }
    return mol_attributes
}
