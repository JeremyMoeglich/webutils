export function range(arg1: number, arg2: number = undefined): Array<number> {
	if (!arg2) {
		arg2 = arg1;
		arg1 = 0;
	} else if (arg1 > arg2) {
		throw 'Arg2 has to be higher or equal compared to Arg1';
	}
	return [...Array(arg2 - arg1).keys()].map((v) => v + arg1);
}

export function zip<T, A extends Array<Array<T>>>(lsts: A) {
	return range(lsts[0].length).map((i) => lsts.map((lst) => lst[i]));
}

export function pairs<T>(lst: T[]): [T, T][] {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return zip([lst.slice(0, -1), lst.slice(1)]) as any;
}

export function set_empty<T>(
	obj: Record<string | number | symbol, T>,
	key: symbol | number | string,
	value: T
) {
	if (value) {
		obj[key] = value;
	} else {
		delete obj[key];
	}
}
export function apply<A, B>(value: A, values: Array<B>, func: (value: A, value2: B) => A): A {
	values.forEach((value2) => {
		value = func(value, value2);
	});
	return value;
}

export function multi_apply<A, B>(value: A, values: Array<[B, (value: A, value2: B) => A]>): A {
	values.forEach(([value2, func]) => {
		value = func(value, value2);
	});
	return value;
}

export function typed_keys<A extends string | symbol | number>(obj: Record<A, unknown>): Array<A> {
	return Object.keys(obj) as Array<A>
}