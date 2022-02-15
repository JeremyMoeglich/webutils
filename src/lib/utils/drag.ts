import type { molecular_formular_type } from '$lib/components/widgets/chem/molecular_formular/molecular_formular_type';
import type { element_mol_attributes } from '$lib/components/widgets/chem/molecular_formular/solve_for_mol';
import { grid_locked } from '$lib/stores';

export interface optional_drop_data {
	number: number;
	molecular_formular: molecular_formular_type;
	mol_attributes: element_mol_attributes;
}

export interface drop_data {
	text: string;
	optional: Partial<optional_drop_data>;
}

export function set_drag_content(event: DragEvent, data: drop_data) {
	event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

export function get_by_priority<K extends keyof optional_drop_data>(
	data: drop_data,
	priorities: K[]
): optional_drop_data[K] | string {
	for (const priority of priorities) {
		if (priority in data.optional) {
			return data.optional[priority];
		}
	}
	return data.text;
}

export function get_drag_content(event: DragEvent): drop_data {
	event.preventDefault();
	return JSON.parse(event.dataTransfer.getData('text/plain'));
}

export function lock_grid() {
	grid_locked.set(true);
}

export function unlock_grid() {
	grid_locked.set(false);
}
