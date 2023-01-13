const { expect } = require('chai');
const { numberOperations } = require('./numberOperations');

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('With positive number return number * number', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
        it('With negative number', () => {
            expect(numberOperations.powNumber(-3)).to.equal(9);
        });
        it('With zero number', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });
    describe('numberChecker', () => {
        it('Invalid input', () => {
            expect(() => numberOperations.numberChecker('hello')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });
        it('Parses string number to number', () => {
            expect(numberOperations.numberChecker('105')).to.equal('The number is greater or equal to 100!');
        });
        it('The number is lower than 100', () => {
            expect(numberOperations.numberChecker(55)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-10)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        });
        it('The number is greater or equal to 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
        it('The number is 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
    });
    describe('sumArrays', () => {
        it('Return empty array', () => {
            expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
        });
        it('Return sum of arrays with one parameter', () => {
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
        });
        it('Return sum of arrays with parameters', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
        });
        it('Return sum of arrays with differentnumber of parameters', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6, 7])).to.deep.equal([5, 7, 9, 7]);
        });
        it('Return sum of arrays with negative of parameters', () => {
            expect(numberOperations.sumArrays([-1, -2, -3], [-1, -2, -3])).to.deep.equal([-2, -4, -6]);
        });
    });
});