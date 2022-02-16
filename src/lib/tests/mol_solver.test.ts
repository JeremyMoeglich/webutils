import { solve_for_mol } from '../utils/chem/mol/solve_for_mol';
import { assert, it } from 'vitest';

it('Molar Mass Calculation', async () => {
	assert.deepEqual(await solve_for_mol({ n: 2, M: 3 }), { n: 2, M: 3, m: 6 });
	assert.deepEqual(await solve_for_mol({ n: 2 }), { n: 2 });
	assert.approximately(
		(await solve_for_mol({ n: 2, M: 3, V: 7 })).c,
		{ n: 2, M: 3, m: 6, c: 2 / 7, V: 7 }.c,
		0.0000001
	);
}, 1000);
