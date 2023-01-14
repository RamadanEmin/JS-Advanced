const { expect } = require('chai');
const { library } = require('./library');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('Invalid input', () => {
            expect(() => library.calcPriceOfBook(1, 1990)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1990)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 1990)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, 1990)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Torronto', undefined)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Torronto', 'year')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Torronto', [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Torronto', {})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Torronto', null)).to.throw('Invalid input');
        });
        it('Return price the book', () => {
            expect(library.calcPriceOfBook('Torronto', 2021)).to.equal('Price of Torronto is 20.00');
        });
        it('Year of publication is less than or equal to 1980, 50% discount', () => {
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal('Price of Troy is 10.00');
            expect(library.calcPriceOfBook('Life Style', 1975)).to.equal('Price of Life Style is 10.00');
        });
    });
    describe('findBook ', () => {
        it('Return the desiredBook', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Torronto')).to.equal('We found the book you want.');
        });
        it('The book is not here', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Batman')).to.equal('The book you are looking for is not here!');
        });
        it('length of booksArr is zero', () => {
            expect(() => library.findBook([], 'Torronto')).to.throw('No books currently available');
        });
    });
    describe('arrangeTheBooks ', () => {
        it('Invalid input', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('string')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
        });
        it('Books are arranged', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
        });
        it('Insufficient space', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});