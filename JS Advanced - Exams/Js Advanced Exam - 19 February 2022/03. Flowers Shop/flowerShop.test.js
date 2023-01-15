const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('Happy pat, return price of flowers', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 3, 2)).to.equal('You need $6.00 to buy Rose!');
        });
        it('Invalid flower', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 1, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 1, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(null, 1, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers({}, 1, 2)).to.throw('Invalid input!');
        });
        it('Invalid price', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', '1', 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'string', 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', [], 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', undefined, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', {}, 2)).to.throw('Invalid input!');
        });
        it('Invalid quantity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 3, '1')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 3, 1.5)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 3, undefined)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 3, [])).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 3, {})).to.throw('Invalid input!');
        });
    });
    describe('checkFlowersAvailable', () => {
        it('Flower is present in the garden', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Lily', 'Orchid'])).to.equal('The Lily are available!');
        });
        it('Flower is not present in the garden', () => {
            expect(flowerShop.checkFlowersAvailable('Daffodil', ['Rose', 'Lily', 'Orchid'])).to.equal('The Daffodil are sold! You need to purchase more!');
        });
    });
    describe('sellFlowers', () => {
        it('Remove flower on that space', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal('Lily / Orchid');
        });
        it('Invalid array', () => {
            expect(() => flowerShop.sellFlowers({}, 1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(1, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('string', 1)).to.throw('Invalid input!');
        });
        it('Invalid index', () => {
            expect(()=>flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -1)).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 3)).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 'string')).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1.2)).to.throw('Invalid input!');
        });
    });
});