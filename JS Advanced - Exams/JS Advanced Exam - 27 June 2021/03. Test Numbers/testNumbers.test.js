const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe('testNumbers', () => {
    describe('sumNumber', () => {
        it('Invalid input', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1)).to.equal(undefined);
        });
        it('Sum of positive numbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
        it('Sum with zero number', () => {
            expect(testNumbers.sumNumbers(1, 0)).to.equal('1.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
        });
        it('Sum of negative numbers', () => {
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });
        it('Sum of float numbers', () => {
            expect(testNumbers.sumNumbers(1.234, 5.67)).to.equal('6.90');
        });
    });
    describe('numberChecker', () => {
        it('Validate number, parse string number to number', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });
        it('Not a number', () => {
            expect(() => testNumbers.numberChecker('string')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!');
        });
        it('Even number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });
        it('Odd number', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    });
    describe('averageSumArray', () => {
        it('Average sum of numbers', () => {
            expect(testNumbers.averageSumArray([1, -2, 7])).to.equal(2);
        });
    });
});