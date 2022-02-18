import { typed_entries, typed_from_entries } from '$lib/utils/general';
import { elements } from '../../../data/chem/elements';
import { parse_molecular_formular } from './parser';
import type { molecular_formular_type } from './type';

export function calculate_molar_mass(formular: string | molecular_formular_type): number | Error {
	let molecular_formular: molecular_formular_type;
	if (typeof formular === 'string') {
		const value = parse_molecular_formular(formular);
		if (value instanceof Error) {
			return value;
		} else {
			molecular_formular = value;
		}
	} else {
		molecular_formular = formular;
	}
	let total = 0;
	const AtomicMassObj = typed_from_entries(elements.map((v) => [v.Symbol, v.AtomicMass]));
	typed_entries(molecular_formular).forEach(([key, value]) => {
		total += AtomicMassObj[key] * value;
	});
	return total;
}
