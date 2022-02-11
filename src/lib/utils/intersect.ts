export function intersect<T = unknown>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): ReadonlyArray<T> {
	const setA = new Set(a);
	const setB = new Set(b);
	const intersection = new Set([...setA].filter((x) => setB.has(x)));
	return Array.from(intersection);
}
