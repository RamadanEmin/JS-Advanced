const { expect } = require('chai');
const { motorcycleRider } = require('./motorcycleRider');

describe('motorcycleRider', () => {
    describe('licenseRestriction ', () => {
        it('With "AM" category', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('With "A1" category', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('With "A2" category', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('With "A" category', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('Invalid input', () => {
            expect(() => motorcycleRider.licenseRestriction('B')).to.throw('Invalid Information!');
        });
    });
    describe('motorcycleShowroom ', () => {
        it('Invalid array input!', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 100)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(100, 100)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom({}, 100)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom('100', 100)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 100)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(null, 100)).to.throw('Invalid Information!');
        });
        it('Invalid number input!', () => {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), 49).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), -1).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), '100').to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), {}).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), []).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), undefined).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"]), null).to.throw('Invalid Information!');
        });
        it('Happy path', () => {
            expect(motorcycleRider.motorcycleShowroom([125, "250", 600], 600)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([0], 600)).to.equal('There are 0 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([45, 250, 600], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
    });
    describe('otherSpendings ', () => {
        it('Invalid array input!', () => {
            expect(() => motorcycleRider.otherSpendings({}, {}, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(null, null, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(undefined, undefined, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(1, 1, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings('1', '1', true)).to.throw('Invalid Information!');
        });
        it('Invalid number boolean!', () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], [])).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], 1)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], '1')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], {})).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], undefined)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(['helmet'],['engine oil'], null)).to.throw('Invalid Information!');
        });
        it('With discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
        });
        it('Without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil','oil filter'], false)).to.equal('You spend $300.00 for equipment and consumables!');
        });
    });
});