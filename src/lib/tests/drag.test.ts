import { get_by_priority } from '../utils/drag';
import { assert, it } from 'vitest';

it('Get By Priority', () => {
	assert.equal(get_by_priority({ text: 'test', optional: { number: 3 } }, ['number']), 3);
	assert.equal(get_by_priority({ text: 'test', optional: { number: 3 } }, []), 'test'),
    assert.equal(get_by_priority({ text: 'test', optional: {} }, ['number']), 'test');
    assert.equal(get_by_priority({ text: 'test', optional: { number: undefined} }, ['number']), 'test');
}, 1000);
