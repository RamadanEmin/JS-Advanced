const expect = require('chai').expect;
const lottery = require('./Lottery');

describe('lottery', () => {
    describe('buyLotteryTicket', () => {
        it('Invalid input', () => {
            expect(() => lottery.buyLotteryTicket('1', undefined, [])).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket({}, null, 1)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(false, [], null)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(null, 'str', '1')).to.throw("Invalid input!");
        });

        it('Unable to buy', () => {
            expect(() => lottery.buyLotteryTicket(5, 5, false)).to.throw("Unable to buy lottery ticket!");
        });

        it('Buy ticket', () => {
            expect(lottery.buyLotteryTicket(5, 5, true)).to.equal("You bought 5 tickets for 25$.");
        });
    });

    describe('checkTicket', () => {
        it('Invalid input', () => {
            expect(() => lottery.checkTicket('1', undefined)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(1, null)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket({}, false)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7])).to.throw("Invalid input!");
        });

        it('Winning numbers', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
        });
    });

    describe('secondChance', () => {
        it('Invalid input', () => {
            expect(() => lottery.secondChance('1', undefined)).to.throw("Invalid input!");
            expect(() => lottery.secondChance([], {})).to.throw("Invalid input!");
            expect(() => lottery.secondChance(null, undefined)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(false, 1)).to.throw("Invalid input!");
        });

        it('Second prize', () => {
            expect(lottery.secondChance(123, [123, 124, 125])).to.equal("You win our second chance prize!");
            expect(lottery.secondChance(120, [123, 124, 125])).to.equal("Sorry, your ticket didn't win!");
        });
    });
})