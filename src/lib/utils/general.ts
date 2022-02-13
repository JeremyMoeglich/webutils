export function intersect<T = unknown>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): ReadonlyArray<T> {
	const setA = new Set(a);
	const setB = new Set(b);
	const intersection = new Set([...setA].filter((x) => setB.has(x)));
	return Array.from(intersection);
}

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
