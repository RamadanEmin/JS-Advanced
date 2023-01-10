const { expect } = require('chai');
const ChristmasMovies = require('./christmasMovies');

describe('ChristmasMovies', () => {
    describe('Instantiation with no parameters', () => {
        it('movieCollection', () => {
            const instance = new ChristmasMovies();
            expect(instance.movieCollection).to.deep.equal([]);
        });
        it('watched', () => {
            const instance = new ChristmasMovies();
            expect(instance.watched).to.deep.equal({});
        });
        it('actors', () => {
            const instance = new ChristmasMovies();
            expect(instance.actors).to.deep.equal([]);
        });
    });
    describe('buyMovie', () => {
        it('Add movie to movieCollection', () => {
            const instance = new ChristmasMovies();
            expect(instance.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.be.equal('You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!');
        });
        it('Add movie and unique actors to movieCollection', () => {
            const instance = new ChristmasMovies();
            expect(instance.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Madison Ingoldsby'])).to.be.equal('You just got Last Christmas to your collection in which Madison Ingoldsby are taking part!');
        });
        it('Exist movie', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            expect(() => instance.buyMovie('Last Christmas', ['Madison Ingoldsby'])).to.throw('You already own Last Christmas in your collection!');
        });
    });
    describe('discardMovie', () => {
        it('Movie is not watched', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            expect(() => instance.discardMovie('Last Christmas')).to.throw('Last Christmas is not watched!');
        });
        it('Discard movie from watched', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            instance.watchMovie('Last Christmas');
            expect(instance.discardMovie('Last Christmas')).to.equal('You just threw away Last Christmas!');
        });
        it('Discard non-existent movie', () => {
            const instance = new ChristmasMovies();
            expect(() => instance.discardMovie('Last Christmas')).to.throw('Last Christmas is not at your collection!');
        });
    });
    describe('watchMovie', () => {
        it('Add movie in watchMovie', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            instance.watchMovie('Last Christmas');
            expect(instance.watched).to.deep.equal({ 'Last Christmas': 1 });
        });
        it('Increase the counter in watchMovie', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            instance.watchMovie('Last Christmas');
            instance.watchMovie('Last Christmas');
            instance.watchMovie('Last Christmas');
            expect(instance.watched).to.deep.equal({ 'Last Christmas': 3 });
        });
        it('Movie is not in the movieCollection', () => {
            const instance = new ChristmasMovies();
            expect(() => instance.watchMovie('Last Christmas')).to.throw('No such movie in your collection!');
        });
    });
    describe('favouriteMovie', () => {
        it('Get favourite movie', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            instance.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            instance.watchMovie('Last Christmas');
            instance.watchMovie('Home Alone 2');
            instance.watchMovie('Last Christmas');
            expect(instance.favouriteMovie()).to.equal('Your favourite movie is Last Christmas and you have watched it 2 times!')
        });
        it('No movie in watched list', () => {
            const instance = new ChristmasMovies();
            expect(() => instance.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });
    });
    describe('mostStarredActors', () => {
        it('Get most starred actor ', () => {
            const instance = new ChristmasMovies();
            instance.buyMovie('Last Christmas', ['Madison Ingoldsby']);
            instance.buyMovie('Home Alone 2', ['Macaulay Culkin', 'Madison Ingoldsby']);
            instance.buyMovie('The Grinch', ['Madison Ingoldsby']);
            expect(instance.mostStarredActor()).to.equal('The most starred actor is Madison Ingoldsby and starred in 3 movies!');
        });
        it('No movie in watched list', () => {
            const instance = new ChristmasMovies();
            expect(() => instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });
    });
});