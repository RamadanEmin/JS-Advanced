const expect = require('chai').expect;
const weddingDay = require('./weddingDay');

describe('weddingDay', () => {
    describe('pickVenue', () => {
        it('Invalit input', () => {
            expect(() => weddingDay.pickVenue('1', null, 1)).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(undefined, [], {})).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(true, {}, [])).to.throw('Invalid Information!');
        });
        it('Wrong location', () => {
            expect(() => weddingDay.pickVenue(1, 1, 'Plovdiv')).to.throw("The location of this venue is not in the correct area!");
        });
        it('With meets', () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
            expect(weddingDay.pickVenue(160, 110, 'Varna')).to.equal("This venue meets the requirements, with capacity of 160 guests and 110$ cover.");
        });
        it('Not meet', () => {
            expect(weddingDay.pickVenue(140, 130, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });

    describe('otherSpendings', () => {
        it('Invalit input', () => {
            expect(() => weddingDay.otherSpendings('1', null, 1)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings(undefined, 1, '1')).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings(true, {}, [])).to.throw('Invalid Information!');
        });
        it('With discount ', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures', 'video'], true)).to.equal("You spend 2125$ for wedding decoration and photography with 15% discount!");
        });
        it('Without discount ', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures', 'video'], false)).to.equal("You spend 2500$ for wedding decoration and photography!");
        });
    });

    describe('tableDistribution', () => {
        it('Invalit input', () => {
            expect(() => weddingDay.tableDistribution('1', null)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(undefined, [])).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(true, {})).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-3, -2)).to.throw('Invalid Information!');
        });
        it('With more people',()=>{
            expect(weddingDay.tableDistribution(12, 2)).to.equal("You have 2 tables with 6 guests on table.");
        });
        it('With less people',()=>{
            expect(weddingDay.tableDistribution(10, 2)).to.equal("There is only 5 people on every table, you can join some tables.");
        });
    });
})