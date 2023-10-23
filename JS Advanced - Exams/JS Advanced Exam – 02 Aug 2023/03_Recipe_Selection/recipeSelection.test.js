const expect = require('chai').expect;
const recipeSelection = require('./recipeSelection');


describe('recipeSelection', () => {
    describe('isTypeSuitable', () => {
        it('Invalid Input', () => {
            expect(() => recipeSelection.isTypeSuitable(1, 1)).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable({}, [])).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable(undefined, null)).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable(1,'Vegan')).to.throw('Invalid input');
        });
        it('vegetarians', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });
        it('vegans', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });
        it('Is suitable', () => {
            expect(recipeSelection.isTypeSuitable('Fish', 'Omnivorous')).to.equal('This recipe is suitable for your dietary restriction');
        });
    });

    describe('isItAffordable', () => {
        it('Invalid Input', () => {
            expect(() => recipeSelection.isItAffordable('1', '1')).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable({}, [])).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable(undefined, null)).to.throw('Invalid input');
        });

        it('With enough budget', () => {
            expect(recipeSelection.isItAffordable(50, 100)).to.equal('Recipe ingredients bought. You have 50$ left');
            expect(recipeSelection.isItAffordable(50, 50)).to.equal('Recipe ingredients bought. You have 0$ left');
        });

        it('With less budget', () => {
            expect(recipeSelection.isItAffordable(100, 50)).to.equal('You don\'t have enough budget to afford this recipe');
        });
    });

    describe('getRecipesByCategory', () => {
        it('Invalid Input', () => {
            expect(() => recipeSelection.getRecipesByCategory('1', 1)).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory({}, [])).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory(undefined, null)).to.throw('Invalid input');
        });

        it('Happy path', () => {
            const recipes = [
                { title: "Pasta Carbonara", category: "Italian" },
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Classic Caesar Salad", category: "Salads" },
                { title: "Chocolate Chip Cookies", category: "Desserts" }
              ];
            expect(recipeSelection.getRecipesByCategory(recipes, 'Italian')).to.deep.equal(["Pasta Carbonara"]);
        });
    });
})