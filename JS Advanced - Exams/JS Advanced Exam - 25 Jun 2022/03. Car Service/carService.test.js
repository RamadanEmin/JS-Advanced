const { expect } = require('chai');
const { carService } = require('./carService');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('Happy path', () => {
            expect(carService.isItExpensive('Bad Brakes')).to.equal('The overall price will be a bit cheaper');
        });
        it('Engine issue', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it('Transmission issue', () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
    });
    describe('discount', () => {
        it('Invalid numberOfParts', () => {
            expect(() => carService.discount(undefined, 100)).to.throw('Invalid input');
            expect(() => carService.discount(null, 100)).to.throw('Invalid input');
            expect(() => carService.discount([], 100)).to.throw('Invalid input');
            expect(() => carService.discount({}, 100)).to.throw('Invalid input');
            expect(() => carService.discount('15', 100)).to.throw('Invalid input');
            expect(() => carService.discount('string', 100)).to.throw('Invalid input');
        });
        it('Invalid totalPrice', () => {
            expect(() => carService.discount(1, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(1, null)).to.throw('Invalid input');
            expect(() => carService.discount(1, [])).to.throw('Invalid input');
            expect(() => carService.discount(1, {})).to.throw('Invalid input');
            expect(() => carService.discount(1, '15')).to.throw('Invalid input');
            expect(() => carService.discount(1, 'string')).to.throw('Invalid input');
        });
        it('Happy path with 30% discount', () => {
            expect(carService.discount(10, 100)).to.equal('Discount applied! You saved 30$');
        });
        it('Happy path with 15% discount', () => {
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
        });
        it('Without discount', () => {
            expect(carService.discount(1, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
        });
    });
    describe('partsToBuy', () => {
        it('Invalid partsCatalog', () => {
            expect(() => carService.partsToBuy(1, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy('string', ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy({}, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(undefined, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(null, ["blowoff valve", "injectors"])).to.throw('Invalid input');
        });
        it('Invalid neededParts', () => {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 1)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 'string')).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], {})).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], undefined)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], null)).to.throw('Invalid input');
        });
        it('Array partsCatalog is empty', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
        it('Happy path with one needed part', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"])).to.equal(145);
        });
        it('Happy path with two needed part', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.equal(375);
        });
    });
});