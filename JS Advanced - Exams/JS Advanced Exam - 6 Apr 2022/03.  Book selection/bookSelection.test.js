const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
        it('Suitable book', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 18)).to.equal(`Those books are suitable`);
        });
        it('Not suitable for kids ', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 8)).to.equal(`Books with Thriller genre are not suitable for kids at 8 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
    });
    describe('isItAffordable ', () => {
        it('Buying the book', () => {
            expect(bookSelection.isItAffordable(5, 10)).to.equal('Book bought. You have 5$ left');
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
        });
        it('Not enough budget', () => {
            expect(bookSelection.isItAffordable(16, 15)).to.equal('You don\'t have enough money');
        });
        it('Invalid price', () => {
            expect(() => bookSelection.isItAffordable('1', 20)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('string', 20)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(undefined, 20)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([], 20)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable({}, 20)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(null, 20)).to.throw('Invalid input');
        });
        it('Invalid budget', () => {
            expect(() => bookSelection.isItAffordable(5, '1')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(5, 'string')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(5, undefined)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(5, [])).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(5, {})).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(5, null)).to.throw('Invalid input');
        });
    });
    describe('suitableTitles ', () => {
        it('Match', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller")).to.deep.equal(["The Da Vinci Code"]);
        });
        it('Two match', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Guest List", genre: "Thriller" }], "Thriller")).to.deep.equal(["The Da Vinci Code", "The Guest List"]);
        });
        it('No match', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Horror")).to.deep.equal([]);
        });
        it('Invalid array input books', () => {
            expect(() => bookSelection.isItAffordable('1', 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('string', 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(undefined, 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(15, 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable({}, 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(null, 'Thriller')).to.throw('Invalid input');
        });
        it('Invalid genre input', () => {
            expect(() => bookSelection.isItAffordable([{ title: "The Da Vinci Code", genre: "Thriller" }], 1)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([{ title: "The Da Vinci Code", genre: "Thriller" }], [])).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([{ title: "The Da Vinci Code", genre: "Thriller" }], undefined)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([{ title: "The Da Vinci Code", genre: "Thriller" }], null)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([{ title: "The Da Vinci Code", genre: "Thriller" }], {})).to.throw('Invalid input');
        });
    });
});