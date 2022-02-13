import { elements } from '../periodic_table/elements';
import type { molecular_formular_type } from './molecular_formular_type';
import { parse_molecular_formular } from './parser';

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
	const AtomicMassObj = Object.fromEntries(elements.map((v) => [v.Symbol, v.AtomicMass]));
	Object.entries(molecular_formular).forEach(([key, value]) => {
		total += AtomicMassObj[key] * value;
	});
	return total;
}
