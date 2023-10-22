class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model || storage < 0 || price < 0 || !condition) {
            throw new Error("Invalid smartphone!");
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const phone = this.availableSmartphones.find(p => p.model == model);

        if (!phone) {
            throw new Error(`${model} was not found!`);
        }

        if (phone.storage >= desiredStorage) {

        } else if (Math.abs(phone.storage - desiredStorage) <= 128) {
            phone.price *= 0.9;
        } else if (Math.abs(phone.storage - desiredStorage) > 128) {
            phone.price *= 0.8;
        }

        const storage = phone.storage;
        const soldPrice = phone.price;

        this.soldSmartphones.push({ model, storage, soldPrice });
        this.revenue += soldPrice;
        this.availableSmartphones.filter(x => x.model != model);

        return `${model} was sold for ${phone.price.toFixed(2)}$`
    }

    upgradePhones() {
        const result = [];

        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        result.push('Upgraded Smartphones:');
        for (let phone of this.availableSmartphones) {
            result.push(`${phone.model} / ${phone.storage * 2} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }

        return result.join('\n');
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        if (criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];
        result.push(`${this.retailer} has a total income of ${(this.revenue).toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach(s => result.push(`${s.model} / ${s.storage} GB / ${(s.soldPrice).toFixed(2)}$`));
        return result.join('\n');

    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));
// New smartphone added: Samsung S20 Ultra / 256 GB / good condition - 1000.00$
// New smartphone added: Iphone 12 mini / 128 GB / perfect condition - 800.00$
// Uncaught Error Error: Invalid smartphone!

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
// Samsung S20 Ultra was sold for 1000.00$
// Xiaomi Redmi Note 10 Pro was sold for 297.00$
// Uncaught Error Error: Samsung Galaxy A13 was not found!

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());
// Upgraded Smartphones:
// Samsung S20 Ultra / 512 GB / good condition / 1000.00$
// Iphone 12 mini / 256 GB / perfect condition / 800.00$
// Xiaomi Redmi Note 10 Pro / 256 GB / perfect condition / 330.00$

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));

