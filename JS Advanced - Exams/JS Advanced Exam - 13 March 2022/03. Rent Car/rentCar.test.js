const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('Return number of matching element', () => {
            expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
            expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi', 'BMW'], 'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
        });
        it('No matching element', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'Toyota')).to.throw('There are no such models in the catalog!');
        });
        it('Invalid array!', () => {
            expect(() => rentCar.searchCar({}, 'Toyota')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(1, 'Toyota')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar('string', 'Toyota')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(undefined, 'Toyota')).to.throw('Invalid input!');
        });
        it('Invalid index!', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], undefined)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], [])).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], {})).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], null)).to.throw('Invalid input!');
        });
    });
    describe('calculatePriceOfCar', () => {
        it('Returns the model and the price it will cost for renting a car for the given days', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.equal('You choose Audi and it will cost $180!');
        });
        it('There is no such model', () => {
            expect(() => rentCar.calculatePriceOfCar('Peugeot', 5)).to.throw('No such model in the catalog!');
        });
        it('Invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar(1, '2')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, 2.1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, [])).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, {})).to.throw('Invalid input!');
        });
    });
    describe('checkBudget', () => {
        it('Budget is bigger or equal to cost', () => {
            expect(rentCar.checkBudget(50, 2, 100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(50, 2, 150)).to.equal('You rent a car!');
        });
        it('Budget is less than cost', () => {
            expect(rentCar.checkBudget(50, 2, 95)).to.equal('You need a bigger budget!');
        });
        it('Invalid input!', () => {
            expect(() => rentCar.checkBudget('1', '2', '3')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(undefined, undefined, undefined)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget([], {}, null)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('one', 'two', 'three')).to.throw('Invalid input!');
        });
    });
});