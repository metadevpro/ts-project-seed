import { sum } from './index';
import { expect } from 'chai';

describe('sample test-suite', () => {
    it('sum 1 + 3 should be 4', () => {
        expect(sum(1, 3)).eql(4);
    });
});
