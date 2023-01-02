const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('Symmetric tests', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });
    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });
    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });
    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });
    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });
    it('works empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('return false for mixed type elements', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});