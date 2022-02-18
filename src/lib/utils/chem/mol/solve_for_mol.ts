import { nerdamer_to_string } from '../../../utils/math/nerdamer_utils';
import { clone, intersection, xor } from 'lodash-es';

export const mol_symbols = ['n', 'm', 'M', 'V', 'c'] as const;
export type mol_symbol_type = typeof mol_symbols[number];
export type element_mol_attributes = Partial<Record<mol_symbol_type, number>>;

interface equasion_type<T> {
	expr: string;
	values: Array<T>;
}

const equasions: Array<equasion_type<mol_symbol_type>> = [
	{
		expr: 'n*M=m',
		values: ['n', 'M', 'm']
	},
	{
		expr: 'n=c*V',
		values: ['n', 'c', 'V']
	}
];
const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export async function solve_for_mol(
	mol_attributes: element_mol_attributes,
	prec = 3
): Promise<element_mol_attributes> {
	let changed = false;
	const nerdamer = await import('nerdamer/all.js');
	equasions.forEach((equasion) => {
		const diff = xor(intersection(getKeys(mol_attributes), equasion.values), equasion.values);
		if (diff.length === 1) {
			const p = nerdamer.solve(equasion.expr, diff[0]).evaluate(clone(mol_attributes));
			const v = Number(nerdamer_to_string(p, prec));
			if (typeof v === 'number') {
				changed = true;
				mol_attributes[diff[0]] = v;
			} else {
				throw 'returned string need number';
			}
		}
	});
	if (changed) {
		mol_attributes = await solve_for_mol(mol_attributes);
	}
	return mol_attributes;
}
