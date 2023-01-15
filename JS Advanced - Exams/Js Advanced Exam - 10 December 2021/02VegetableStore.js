class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const added = [];
        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let currentVegetable = this.availableProducts.find(v => v.type === type);
            if (currentVegetable) {
                currentVegetable.quantity += quantity;
                if (price > currentVegetable.price) {
                    currentVegetable.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
                added.push(type);
            }
        }
        return `Successfully added ${added.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            const availableProduct = this.availableProducts.find(p => p.type === type);
            if (!availableProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (quantity > availableProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += quantity * availableProduct.price;
            availableProduct.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const availableProduct = this.availableProducts.find(p => p.type === type);
        if (!availableProduct) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > availableProduct.quantity) {
            availableProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        availableProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        const result = [];
        result.push('Available vegetables:');
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(p => result.push(`${p.type}-${p.quantity}-$${p.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n');
    }
};

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// Successfully added Okra, Beans, Celery

let vegStore1 = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore1.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore1.buyingVegetables(["Okra 1"]));
console.log(vegStore1.buyingVegetables(["Beans 8", "Okra 1.5"]));
//console.log(vegStore1.buyingVegetables(["Banana 1", "Beans 2"]));
// Successfully added Okra, Beans, Celery
// Great choice! You must pay the following amount $3.50.
// Great choice! You must pay the following amount $27.65.
// Uncaught Error: Banana is not available in the store, your current bill is $0.00.

let vegStore2 = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore2.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore2.rottingVegetable("Okra", 1));
console.log(vegStore2.rottingVegetable("Okra", 2.5));
//onsole.log(vegStore2.buyingVegetables(["Beans 8", "Okra 1.5"]));
// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

let vegStore3 = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore3.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore3.rottingVegetable("Okra", 1));
console.log(vegStore3.rottingVegetable("Okra", 2.5));
console.log(vegStore3.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore3.revision());
// Successfully added Okra, Beans, Celery 
// Some quantity of the Okra has been removed. 
// The entire quantity of the Okra has been removed. 
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.
