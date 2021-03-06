import { maxBy } from 'lodash-es';

export type object_key = string | symbol | number;

export function range(arg1: number, arg2: number | undefined = undefined): Array<number> {
	if (!arg2) {
		arg2 = arg1;
		arg1 = 0;
	} else if (arg1 > arg2) {
		throw 'Arg2 has to be higher or equal compared to Arg1';
	}
	return [...Array(arg2 - arg1).keys()].map((v) => v + arg1);
}

export function zip<T>(lsts: T[][]) {
	if (lsts.length === 0) {
		return [];
	}
	const max_value = maxBy(lsts, (v) => v.length);
	if (typeof max_value === 'undefined') {
		throw 'max value was undefined, this should not happen';
	}
	return range(max_value.length).map((i) => lsts.map((lst) => lst[i]));
}

export function pairs<T>(lst: T[]): [T, T][] {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return zip([lst.slice(0, -1), lst.slice(1)]) as any;
}

export function set_empty<T>(obj: Record<object_key, T>, key: symbol | number | string, value: T) {
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

export function typed_keys<K extends object_key>(obj: Record<K, unknown>): Array<K> {
	return Object.keys(obj) as Array<K>;
}

export function typed_values<V>(obj: Record<object_key, V>): Array<V> {
	return Object.values(obj) as Array<V>;
}

export function typed_entries<K extends object_key, V>(obj: Partial<Record<K, V>>): Array<[K, V]> {
	return Object.entries(obj) as Array<[K, V]>;
}

export function typed_from_entries<K extends object_key, V>(values: [K, V][]): Record<K, V> {
	return Object.fromEntries(values) as Record<K, V>;
}

export function nullableobj_to_partial<K extends object_key, V>(
	obj: Record<K, V | null | undefined>
): Record<K, V> {
	return typed_from_entries(
		typed_entries(obj).filter(([, v]) => ((v ?? null) === null ? false : true))
	) as Record<K, V>;
}
