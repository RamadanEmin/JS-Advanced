const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven', () => {
    it('return undefined with array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('return undefined with object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('return undefined with number', () => {
        expect(isOddOrEven(0)).to.be.undefined;
    });
    it('works with even length', () => {
        expect(isOddOrEven('Hi')).to.be.equal('even');
    });
    it('works with odd length', () => {
        expect(isOddOrEven('Hello')).to.be.equal('odd');
    });
});

