import { calculate_molar_mass } from '../components/widget_components/widgets/chem/molecular_formular/molar_mass';
import { assert, it } from 'vitest';
import { parse_molecular_formular } from '../components/widget_components/widgets/chem/molecular_formular/parser';

it('Molar Mass Calculation', () => {
	assert.equal(calculate_molar_mass(''), 0);
    assert.approximately(calculate_molar_mass('H') as number, 1.0079, 0.01);
    assert.approximately(calculate_molar_mass('C5H6O3') as number, 114, 0.2);
    assert.equal(calculate_molar_mass('C5(H6O3)'), calculate_molar_mass('C5H6O3'));
    assert.equal(calculate_molar_mass('C5(H3O2)2'), calculate_molar_mass('C5H6O4'));
}, 1000);

it('Molecular Formular Parsing', () => {
	assert.deepEqual(parse_molecular_formular(''), {});
    assert.deepEqual(parse_molecular_formular('H'), {H: 1});
    assert.deepEqual(parse_molecular_formular('C5H6O3'), {H: 6, C: 5, O: 3});
    assert.deepEqual(parse_molecular_formular('C5(H6O3)'), parse_molecular_formular('C5H6O3'));
    assert.deepEqual(parse_molecular_formular('C5(H3O2)2'), parse_molecular_formular('C5H6O4'));
}, 1000);