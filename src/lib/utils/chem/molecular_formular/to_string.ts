import { typed_entries } from '$lib/utils/general';
import type { molecular_formular_type } from './type';

export default function molecular_formular_to_string(formular: molecular_formular_type): string {
	return typed_entries(formular)
		.map(([k, v]) => [`${k}${v}`])
		.join('');
}
