const { expect } = require('chai');
const { dealership } = require('./dealership');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('Return your old car with discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });
        it('Return newCarPrice', () => {
            expect(dealership.newCarCost('BMW X6', 50000)).to.equal(50000);
        });
    });
    describe('carEquipment', () => {
        it('Return array with selected extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims'], [0, 2])).to.deep.equal(['heated seats', 'sport rims']);
        });
        it('With empty index return empty array', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims'], [])).to.deep.equal([]);
        });
        it('With empty extras return array with undefined on index', () => {
            expect(dealership.carEquipment([], [0, 2])).to.deep.equal([undefined, undefined]);
        });
    });
    describe('euroCategory', () => {
        it('Category without discount', () => {
            let price = dealership.newCarCost('Audi A4 B8', 15000);
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('Category with discount', () => {
            let price = dealership.newCarCost('Audi A4 B8', 15000);
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});

