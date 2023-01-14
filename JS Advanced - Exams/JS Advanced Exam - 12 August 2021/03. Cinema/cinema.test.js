const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('Cinema', () => {
    describe('showMovies', () => {
        it('Available movies ', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
        it('Array length is zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });
    describe('ticketPrice', () => {
        it('Return the price for project in schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('Throw error for project that is not in schedule', () => {
            expect(() => cinema.ticketPrice('Kids')).to.throw('Invalid projection type.');
        });
    });
    describe('swapSeatsInHall', () => {
        it('Swap seats', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.');
        });
        it('Invalid input', () => {
            expect(cinema.swapSeatsInHall('1',2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,'2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1','2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([],{})).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined,null)).to.equal('Unsuccessful change of seats in the hall.');
        });
        
        it('Seats numbers do not exist', () => {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Seats numbers are not integer', () => {
            expect(cinema.swapSeatsInHall(1.1,2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.1,2.1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,2.1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Numbers are greater than the capacity -20', () => {
            expect(cinema.swapSeatsInHall(21,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21,22)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Numbers are less than zero', () => {
            expect(cinema.swapSeatsInHall(-1,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,-1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1,-2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Seats are zero', () => {
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Seats number are equal', () => {
            expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});