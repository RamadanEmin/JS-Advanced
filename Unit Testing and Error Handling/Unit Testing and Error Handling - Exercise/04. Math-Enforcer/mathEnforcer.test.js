const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive function test', () => {
        it('should return undefined for not a number param', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
        it('should return undefined for not a array param', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('should return undefined for not a object param', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('should return undefined for not a null param', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });
        it('should return correct result with positive integer', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
        it('should return correct result with negative integer', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('should return correct result with floating-poin number', () => {
            expect(mathEnforcer.addFive(0.11)).to.be.closeTo(5.11, 0.01);
        });
    });
    describe('subtractTen function test', () => {
        it('should return undefined for not a number param', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });
        it('should return undefined for not a array param', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('should return undefined for not a object param', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('should return undefined for not a null param', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });
        it('should return correct result with positive integer', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return correct result with negative integer', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('should return correct result with floating-poin number', () => {
            expect(mathEnforcer.subtractTen(11.11)).to.be.closeTo(1.11, 0.01);
        });
    });
    describe('sum function test', () => {
        it('should return undefined with not a number first param', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        });
        it('should return undefined with not a number second param', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });
        it('should return undefined for not a array param', () => {
            expect(mathEnforcer.sum([], 1)).to.be.undefined;
        });
        it('should return undefined for not a object param', () => {
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        });
        it('should return undefined for not a null param', () => {
            expect(mathEnforcer.sum(null, 1)).to.be.undefined;
        });
        it('should return correct result with integers params', () => {
            expect(mathEnforcer.sum(-5, 10)).to.be.equal(5);
        });
        it('should return correct result with floating-points params', () => {
            expect(mathEnforcer.sum(11.11, 5.11)).to.be.closeTo(16.22, 0.01);
        });
    });
});
