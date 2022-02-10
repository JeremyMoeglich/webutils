import { elements } from '../periodic_table/elements';
import type { element_symbol } from '../periodic_table/types';

const symbols = elements.map((v) => v.Symbol);

function add_element(
	obj: Partial<Record<element_symbol, number>>,
	symbol_string: string,
	number_string: string
): Partial<Record<element_symbol, number>> | Error {
	if (symbol_string !== '') {
		if (symbols.includes(symbol_string as element_symbol)) {
			try {
				if (number_string === '') {
					number_string = '1';
				}
				if (symbol_string in obj) {
					obj[symbol_string] += parseInt(number_string);
				} else {
					obj[symbol_string] = parseInt(number_string);
				}
			} catch {
				return Error('Invalid Character');
			}
		} else {
			return Error('Invalid Element Symbol');
		}
	}
	return obj;
}

export function parse_molecular_formular(
	formular: string
): Partial<Record<element_symbol, number>> | Error {
	const sections = [];
	let current_section = '';
	let number_string = '';
	let bracket_index = 0;
	formular.split('').forEach((v) => {
		if (v === '(') {
			sections.push(current_section);
			current_section = '';
		} else if (bracket_index === 1) {
			if (/^[0-9]*$/.test(v)) {
				number_string += v;
			} else {
				const k = flatten_molecular_formular(current_section);
				console.log(k);
				sections.push(k);
			}
		} else if (v === ')') {
			bracket_index -= 1;
			current_section = '';
		} else {
			current_section += v;
		}
	});
	sections.push(current_section);

	const elements_obj: Partial<Record<element_symbol, number>> = {};
	let symbol_string = '';

	sections
		.join('')
		.split('')
		.forEach((v) => {
			if (/^[0-9]*$/.test(v)) {
				number_string += v;
			} else if (/^[a-z]*$/.test(v)) {
				symbol_string += v;
			} else if (/^[A-Z]*$/.test(v)) {
				const returned_value = add_element(elements_obj, symbol_string, number_string);
				if (returned_value instanceof Error) {
					return returned_value;
				}
				symbol_string = v;
				number_string = '';
			}
		});
	const returned_value = add_element(elements_obj, symbol_string, number_string);
	if (returned_value instanceof Error) {
		return returned_value;
	}
	return elements_obj;
}

function flatten_molecular_formular(formular: string): string {
	const molecular_formular_obj = parse_molecular_formular(formular);
	let molecular_formular_string = '';
	Object.entries(molecular_formular_obj).forEach(([k, v]) => {
		molecular_formular_string += `${k}${v}`;
	});
	return molecular_formular_string;
}

console.log(parse_molecular_formular('O7(N5C5)2H4'));
