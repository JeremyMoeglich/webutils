import { elements } from '../periodic_table/elements';
import type { element_symbol } from '../periodic_table/types';
import type { molecular_formular_type } from './molecular_formular_type';

const symbols = elements.map((v) => v.Symbol);

function add_element(
	obj: molecular_formular_type,
	symbol_string: string,
	number_string: string
): molecular_formular_type | Error {
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

export function parse_molecular_formular(formular: string): molecular_formular_type | Error {
	const sections: Array<{ value: string; multiplier: number }> = [];
	let current_section = '';
	let number_string = '';
	let bracket_index = 0;
	let multiplier_flag = false;
	formular.split('').forEach((v) => {
		if (v === '(') {
			if (bracket_index === 0) {
				sections.push({ value: current_section, multiplier: 1 });
				current_section = '';
			} else {
				current_section += v;
			}
			bracket_index += 1;
		} else if (multiplier_flag) {
			if (v === ')') {
				return Error('invalid closing bracket');
			} else if (/^[0-9]*$/.test(v)) {
				number_string += v;
			} else {
				if (number_string === '') {
					number_string = '1';
				}
				const multiplier = parseInt(number_string);
				sections.push({ value: current_section, multiplier: multiplier });
				current_section = '';
				multiplier_flag = false;
				if (v === '(') {
					bracket_index += 1;
				} else {
					current_section += v;
				}
			}
		} else if (v === ')') {
			bracket_index -= 1;
			if (bracket_index === 0) {
				multiplier_flag = true;
			} else {
				current_section += v;
			}
		} else {
			current_section += v;
		}
	});

	sections.push({
		value: current_section,
		multiplier: (() => {
			if (number_string === '') {
				number_string = '1';
			}
			return parseInt(number_string);
		})()
	});

	const calculated_sections = sections.map((v) => {
		if (v.multiplier === 1) {
			return v.value;
		}
		const current_section = parse_molecular_formular(v.value);
		const multiplied_section = Object.fromEntries(
			Object.entries(current_section).map(([key, value]) => [key, value * v.multiplier])
		) as molecular_formular_type;
		return flatten_molecular_formular(multiplied_section);
	});

	const elements_obj: molecular_formular_type = {};
	let symbol_string = '';

	calculated_sections
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

function flatten_molecular_formular(formular: molecular_formular_type): string {
	let molecular_formular_string = '';
	Object.entries(formular).forEach(([k, v]) => {
		molecular_formular_string += `${k}${v}`;
	});
	return molecular_formular_string;
}
