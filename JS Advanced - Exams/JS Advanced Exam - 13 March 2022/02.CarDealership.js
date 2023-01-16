class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || horsepower % 1 !== 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex(c => c.model === model);
        if (carIndex === -1) {
            throw new Error(`${model} was not found!`);
        }
        const car = this.availableCars[carIndex];
        let price = Number(car.price);
        if (car.mileage <= desiredMileage) {
        } else if (car.mileage - desiredMileage <= 40000) {
            price *= 0.95;
        } else {
            price *= 0.90;
        }
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({ model, horsepower: car.horsepower, soldPrice: price });
        this.totalIncome += price;
        return `${model} was sold for ${price.toFixed(2)}$`;
    }

    currentCar() {
        const result = [];
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }
        result.push('-Available cars:');
        this.availableCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));
        return result.join('\n');
    }

    salesReport(criteria) {
        const result = [];
        const sortedMethod = {
            horsepower: (a, b) => b.horsepower - a.horsepower,
            model: (a, b) => a.model.localeCompare(b.model)
        };
        if (!sortedMethod[criteria]) {
            throw new Error('Invalid criteria!');
        }
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`);
        this.soldCars.sort(sortedMethod[criteria]);
        this.soldCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        return result.join('\n');
    }
};

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
//console.log(dealership.addCar('', 120, 4900, 240000));
// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!

let dealership1 = new CarDealership('SoftAuto');
dealership1.addCar('Toyota Corolla', 100, 3500, 190000);
dealership1.addCar('Mercedes C63', 300, 29000, 187000);
dealership1.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership1.sellCar('Toyota Corolla', 230000));
console.log(dealership1.sellCar('Mercedes C63', 110000));
// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

let dealership2 = new CarDealership('SoftAuto');
dealership2.addCar('Toyota Corolla', 100, 3500, 190000);
dealership2.addCar('Mercedes C63', 300, 29000, 187000);
dealership2.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership2.currentCar());
// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

let dealership3 = new CarDealership('SoftAuto');
dealership3.addCar('Toyota Corolla', 100, 3500, 190000);
dealership3.addCar('Mercedes C63', 300, 29000, 187000);
dealership3.addCar('Audi A3', 120, 4900, 240000);
dealership3.sellCar('Toyota Corolla', 230000);
dealership3.sellCar('Mercedes C63', 110000);
console.log(dealership3.salesReport('horsepower'));
// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
