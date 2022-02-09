import type { element_symbol } from '../periodic_table/types';

export function parse_molecular_formular(
	formular: string
): Partial<Record<element_symbol, number>> {
	let comb = '';
	formular.split('').forEach((v) => {
		if (/^[0-9]*$/.test(v)) {
			console.log('test');
		}
	});
	return { H: 2 };
}

parse_molecular_formular('A2h8f');
