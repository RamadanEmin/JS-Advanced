const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar function test', () => {
    it('return undefined with number for first param', () => {
        expect(lookupChar(0, 1)).to.be.undefined;
    });
    it('return undefined with array for first param', () => {
        expect(lookupChar([], 1)).to.be.undefined;
    });
    it('return undefined with object for first param', () => {
        expect(lookupChar({}, 1)).to.be.undefined;
    });
    it('return undefined with string for index', () => {
        expect(lookupChar('abc', '0')).to.be.undefined;
    });
    it('return undefined with array for index', () => {
        expect(lookupChar('abc', [])).to.be.undefined;
    });
    it('return undefined with object for index', () => {
        expect(lookupChar('abc', {})).to.be.undefined;
    });
    it('return undefined with float index', () => {
        expect(lookupChar('abc', 1.1)).to.be.undefined;
    });
    it('return Incorrect index with negative index', () => {
        expect(lookupChar('abc', -1)).to.be.equal('Incorrect index');
    });
    it('return Incorrect index with bigger index', () => {
        expect(lookupChar('abc', 3)).to.be.equal('Incorrect index');
    });
    it('return Incorrect index with empty string for input', () => {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });
    it('works with valid types and values', () => {
        expect(lookupChar('abc', 1)).to.be.equal('b');
    });
});
