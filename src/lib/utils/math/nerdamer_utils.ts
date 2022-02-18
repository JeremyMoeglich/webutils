import type { Expression } from 'nerdamer';

const square_bracket = /[[\]]/gi;

export function nerdamer_to_string(expr: Expression, prec = 3): string {
	const decimals = new RegExp(`([0-9]\\.[0-9]{${prec}})[0-9]*`, 'ig');
	return expr.text().toString().replaceAll(square_bracket, '').replaceAll(decimals, '$1');
}
