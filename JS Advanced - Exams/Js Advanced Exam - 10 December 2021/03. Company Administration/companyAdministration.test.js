const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('Happy path, hire the employee', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 5)).to.equal('Pesho was successfully hired for the position Programmer.');
        });
        it('Happy path, hire the employee with edge case for experience', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equal('Pesho was successfully hired for the position Programmer.')
        });
        it('Invalit position', () => {
            expect(() => companyAdministration.hiringEmployee('Gosho', 'Engineer', 5)).to.throw('We are not looking for workers for this position.');
        });
        it('Invalid years of experience', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1)).to.equal('Ivan is not approved for this position.');
        });
    });
    describe('calculateSalary', () => {
        it('Invalid input', () => {
            expect(() => companyAdministration.calculateSalary('string')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('1')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours');
        });
        it('Happy path with hour', () => {
            expect(companyAdministration.calculateSalary(4)).to.equal(60);
        });
        it('Edge case with 160 hour, before bonus', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it('Added bonus', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });
    describe('firedEmployee', () => {
        it('Happy path', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan'], 1)).to.equal('Petar');
        });
        it('One name and index 0, empty string as result', () => {
            expect(companyAdministration.firedEmployee(['Petar'], 0)).to.equal('');
        });
        it('Three names and index 1', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George');
        });
        it('Invalid array input for employees', () => {
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('1', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw('Invalid input');
        });
        it('Invalid index, typ', () => {
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],'1')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],undefined)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],1.1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],[])).to.throw('Invalid input');
        });
        it('Invalid index, outside the array', () => {
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'],-1)).to.throw('Invalid input');
        });
    });
});