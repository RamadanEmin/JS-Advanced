const { expect } = require('chai');
const { movieTheater } = require('./movieTheater');

describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('Case with rating "G"', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        });
        it('Case with rating "PG"', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });
        it('Case with rating "R"', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });
        it('Case with rating "NC-17"', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });
        it('Case without age limit', () => {
            expect(movieTheater.ageRestrictions('Other case')).to.equal('There are no age restrictions for this movie');
        });
    });
    describe('moneySpent', () => {
        it('Invalid tickets number input', () => {
            expect(() => movieTheater.moneySpent('1', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('str', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent([], ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent({}, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(undefined, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(null, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
        });
        it('Invalid food array input', () => {
            expect(() => movieTheater.moneySpent(1, '1', ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, 'str', ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, 1, ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, {}, ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, undefined, ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, null, ['Soda', 'Water'])).to.throw('Invalid input');
        });
        it('Invalid drinks array input', () => {
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], '1')).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], 'str')).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], 1)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], {})).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], undefined)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], null)).to.throw('Invalid input');
        });
        it('Purchase with applied discount', () => {
            expect(movieTheater.moneySpent(4, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 54.80');
        });
        it('Purchase without discount', () => {
            expect(movieTheater.moneySpent(3, [], ['Soda', 'Soda'])).to.equal('The total cost for the purchase is 50.00');
            expect(movieTheater.moneySpent(3, [], ['Soda'])).to.equal('The total cost for the purchase is 47.50');
        });
    });
    describe('reservation', () => {
        it('Invalid rowsArray array input', () => {
            expect(() => movieTheater.reservation('str', 1)).to.throw('Invalid input');
            expect(() => movieTheater.reservation(1, 1)).to.throw('Invalid input');
            expect(() => movieTheater.reservation({}, 1)).to.throw('Invalid input');
            expect(() => movieTheater.reservation(undefined, 1)).to.throw('Invalid input');
            expect(() => movieTheater.reservation(null, 1)).to.throw('Invalid input');
        });
        it('Invalid neededSeatsCount number input', () => {
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], {})).to.throw('Invalid input');
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], [])).to.throw('Invalid input');
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '1')).to.throw('Invalid input');
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], undefined)).to.throw('Invalid input');
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], null)).to.throw('Invalid input');
        });
        it('Return rows', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.equal(1);
        });
    });
});