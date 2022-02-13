import { zip, range, pairs, intersect } from '../utils/general';
import { assert, it } from 'vitest';

it('Pairs', () => {
	assert.deepEqual(pairs([5, 6, 8, 2, 7, 9, 0]), [
		[5, 6],
		[6, 8],
		[8, 2],
		[2, 7],
		[7, 9],
		[9, 0]
	]);
}, 1000);
it('Zip', () => {
	assert.deepEqual(
		zip([
			[5, 6, 8, 2],
			[7, 9, 0]
		]),
		[
			[5, 7],
			[6, 9],
			[8, 0],
			[2, undefined]
		]
	);
}, 1000);

it('Intersect', () => {
	assert.deepEqual(intersect([5, 6, 8, 2], [7, 8, 9, 0, 5]), [5, 8]);
}, 1000);

it('Range', () => {
	assert.deepEqual(range(6), [0, 1, 2, 3, 4, 5]);
	assert.deepEqual(range(3, 11), [3, 4, 5, 6, 7, 8, 9, 10]);
	assert.deepEqual(range(5, 5), []);
	assert.deepEqual(range(4, 5), [4]);
}, 1000);
