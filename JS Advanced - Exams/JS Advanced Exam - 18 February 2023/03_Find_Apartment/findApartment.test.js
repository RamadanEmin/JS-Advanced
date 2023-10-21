let expect = require('chai').expect;
let findNewApartment = require('./findApartment');


describe('findNewApartment', () => {
    describe('isGoodLocation', () => {
        it('Happy path', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
        it('Invalid city input', () => {
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(null, true)).to.throw('Invalid input!');
        });
        it('Invalid nearPublicTransportation input', () => {
            expect(() => findNewApartment.isGoodLocation('Plovdiv', 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('Plovdiv', 'yes')).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('Plovdiv', [])).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('Plovdiv', {})).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('Plovdiv', undefined)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('Plovdiv', null)).to.throw('Invalid input!');
        });
        it('Different location', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
        it('Without transportation', () => {
            expect(findNewApartment.isGoodLocation('Karlovo', true)).to.equal('This location is not suitable for you.');
        });
    });
    describe('isLargeEnough', () => {
        it('Happy path', () => {
            expect(findNewApartment.isLargeEnough([40,50,60,120], 55)).to.equal('60, 120');
            expect(findNewApartment.isLargeEnough([40,50,40,20], 55)).to.equal('');
        });
        it('Invalid apartments input', () => {
            expect(() => findNewApartment.isLargeEnough({}, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough('str', 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough(true, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough(undefined, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough(null, 1)).to.throw('Invalid input!');
        });
        it('Invalid minimalSquareMeters input', () => {
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], '1')).to.throw('Invalid input!'));
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], false)).to.throw('Invalid input!'));
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], {})).to.throw('Invalid input!'));
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], [])).to.throw('Invalid input!'));
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], undefined)).to.throw('Invalid input!'));
            expect(() => findNewApartment.isLargeEnough(([40, 50, 60], null)).to.throw('Invalid input!'));
        });
    });
    describe('isItAffordable', () => {
        it('Invalid input', () => {
            expect(() => findNewApartment.isItAffordable(0, -1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-1, 0)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable('str', 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(true, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable([], 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable({}, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(undefined, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(null, 1)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, 'str')).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, [])).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, {})).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, undefined)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, null)).to.throw('Invalid input!');
        });
        it('Happy path', () => {
            expect(findNewApartment.isItAffordable(1000,1000)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(1000,1001)).to.equal("You can afford this home!");
        });
        it('Otherwise condition', () => {
            expect(findNewApartment.isItAffordable(1001,1000)).to.equal("You don't have enough money for this house!");
        });
    });
})