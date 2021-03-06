import type { Required } from 'utility-types';
import { grid_locked } from '../stores';
import type { element_mol_attributes } from './chem/mol/solve_for_mol';
import type { molecular_formular_type } from './chem/molecular_formular/type';

export interface optional_drop_data {
	number: number;
	molecular_formular: molecular_formular_type;
	mol_attributes: element_mol_attributes;
}

export interface drop_data {
	text: string;
	optional: Partial<optional_drop_data>;
}

export type require_optional_drop_data<
	T extends keyof optional_drop_data,
	D extends drop_data = drop_data
> = { text: D['text']; optional: Required<drop_data['optional'], T> };

export function set_drag_content(event: DragEvent, data: drop_data) {
	if (event.dataTransfer === null) {
		throw 'Event is null, this is likely a bug';
	}
	event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

export function get_by_priority<K extends keyof optional_drop_data>(
	data: drop_data,
	priorities: K[]
): optional_drop_data[K] | string {
	for (const priority of priorities) {
		if (priority in data.optional && data.optional[priority] !== undefined) {
			return data.optional[priority] as optional_drop_data[K];
		}
	}
	return data.text;
}

export function get_drag_content(event: DragEvent): drop_data {
	event.preventDefault();
	if (event.dataTransfer === null) {
		throw 'Event is null, this is likely a bug';
	}
	return JSON.parse(event.dataTransfer.getData('text/plain'));
}

export function lock_grid() {
	grid_locked.set(true);
}

export function unlock_grid() {
	grid_locked.set(false);
}
