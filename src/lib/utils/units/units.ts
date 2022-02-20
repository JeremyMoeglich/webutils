import { units } from "$lib/data/chem/units";

type units_options<T extends 'defenitions' | 'systems' | 'prefixes'> =
	typeof units[T][keyof typeof units[T]];

export const units_defenitions: typeof units['defenitions'] = units.defenitions;
export const units_systems: typeof units['systems'] = units.systems;
export const units_prefixes: typeof units['prefixes'] = units.prefixes;

type base_units = units_options<'defenitions'>['baseUnit'];
type prefixes = keyof typeof units['prefixes']

type unit = Partial<Record<base_units, number>>;

export interface unit_value {
	value: number;
	unit: unit;
    prefix: prefixes
}
