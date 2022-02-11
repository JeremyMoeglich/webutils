import type { molecular_formular_type } from '$lib/chemistry/molecular_formular/molecular_formular_type';

interface optional_drow_data {
	number: number;
	molecular_formular: molecular_formular_type;
}

export interface drop_data {
	text: string;
	optional: Partial<optional_drow_data>;
}

export function set_drag_content(event: DragEvent, data: drop_data) {
	event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

export function get_drag_content(event: DragEvent): drop_data {
	event.preventDefault();
	return JSON.parse(event.dataTransfer.getData('text/plain'));
}
