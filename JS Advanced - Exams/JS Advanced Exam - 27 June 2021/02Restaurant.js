class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products = []) {
        for (const product of products) {
            let [productName, productQuantity, productPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);
            if (this.budgetMoney >= productPrice) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        this.menu[meal] = { neededProducts, price };
        const menuSize = Object.keys(this.menu).length;
        if (menuSize === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        const meals = Object.entries(this.menu);
        if (meals.length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        return meals.map(([meal, data]) => `${meal} - $ ${data.price}`).join('\n');
    }

    makeTheOrder(meal) {
        const findedMeal = this.menu[meal];
        if (!findedMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        for (const data of findedMeal.neededProducts) {
            let [product, quantity] = data.split(' ');
            quantity = Number(quantity);
            if (!this.stockProducts[product] || this.stockProducts[product] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (const data of findedMeal.neededProducts) {
            let [product, quantity] = data.split(' ');
            this.stockProducts[product] -= Number(quantity);
        }
        this.budgetMoney += Number(findedMeal.price);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${findedMeal.price}.`;
    }
};

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

let kitchen2 = new Restaurant(1000);
console.log(kitchen2.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen2.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

console.log(kitchen2.showTheMenu());
// frozenYogurt - $ 9.99
// Pizza - $ 15.55

let kitchen3 = new Restaurant(1000);
kitchen3.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen3.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen3.makeTheOrder('frozenYogurt'));
// Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
