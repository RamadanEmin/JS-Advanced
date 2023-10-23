const expect = require('chai').expect;
const onlineStore = require('./onlineStore');

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('Invalid input', () => {
            expect(() => onlineStore.isProductAvailable(1, '1')).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(null, undefined)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable([], {})).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(true, null)).to.throw("Invalid input.");
        });
        it('With less quantity', () => {
            expect(onlineStore.isProductAvailable('banana', 0)).to.equal('Sorry, banana is currently out of stock.');
            expect(onlineStore.isProductAvailable('banana', -1)).to.equal('Sorry, banana is currently out of stock.');
        });
        it('Available ptoduct', () => {
            expect(onlineStore.isProductAvailable('banana', 1)).to.equal('Great! banana is available for purchase.');
        });
    });

    describe('canAffordProduct', () => {
        it('Invalid input', () => {
            expect(() => onlineStore.canAffordProduct(true, '1')).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(null, undefined)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct([], {})).to.throw("Invalid input.");
        });
        it('With less funds', () => {
            expect(onlineStore.canAffordProduct(5, 4)).to.equal("You don't have sufficient funds to buy this product.");
        });
        it('With enough funds', () => {
            expect(onlineStore.canAffordProduct(5, 5)).to.equal('Product purchased. Your remaining balance is $0.');
            expect(onlineStore.canAffordProduct(5, 10)).to.equal('Product purchased. Your remaining balance is $5.');
        });
    });

    describe('getRecommendedProducts', () => {
        it('Invalid input', () => {
            expect(() => onlineStore.getRecommendedProducts(true, 1)).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(null, undefined)).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts('1', {})).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(1, [])).to.throw("Invalid input.");
        });
        it('With match', () => {
            const product = [{ name: "Camera", category: "Photography" }, { name: "Objective", category: "Photography" }, { name: "Laptop", category: "Technology" }];
            expect(onlineStore.getRecommendedProducts(product, 'Photography')).to.deep.equal('Recommended products in the Photography category: Camera, Objective');
        });
        it('Without match', () => {
            const product = [{ name: "Camera", category: "Photography" }, { name: "Objective", category: "Photography" }, { name: "Laptop", category: "Technology" }];
            expect(onlineStore.getRecommendedProducts(product, 'Kitchen')).to.deep.equal('Sorry, we currently have no recommended products in the Kitchen category.');
        });
    });
});