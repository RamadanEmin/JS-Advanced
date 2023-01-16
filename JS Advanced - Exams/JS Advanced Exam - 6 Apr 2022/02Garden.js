class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(p => p.plantName === plantName);
        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[plantIndex].ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        const plant = this.plants[plantIndex];
        this.plants.splice(plantIndex, 1);
        this.storage.push(`${plantName} (${plant.quantity})`);
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        const result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        const sortedPlants = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
        result.push(`Plants in the garden: ${sortedPlants.join(', ')}`);
        this.storage === 0
            ? result.push('Plants in storage: The storage is empty.')
            : result.push(`Plants in storage: ${this.storage.join(', ')}`);
        return result.join('\n');
    }
};

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
//console.log(myGarden.addPlant('olive', 50));
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.

const myGarden1 = new Garden(250)
console.log(myGarden1.addPlant('apple', 20));
console.log(myGarden1.addPlant('orange', 100));
console.log(myGarden1.addPlant('cucumber', 30));
console.log(myGarden1.ripenPlant('apple', 10));
console.log(myGarden1.ripenPlant('orange', 1));
//console.log(myGarden1.ripenPlant('orange', 4));
//console.log(myGarden1.ripenPlant('olive', 30));
//console.log(myGarden1.ripenPlant('cucumber', -5));
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe.
// Uncaught Error Error: There is no olive in the garden.
// Uncaught Error Error: The quantity cannot be zero or negative.

const myGarden2 = new Garden(250)
console.log(myGarden2.addPlant('apple', 20));
console.log(myGarden2.addPlant('orange', 200));
console.log(myGarden2.addPlant('raspberry', 10));
console.log(myGarden2.ripenPlant('apple', 10));
console.log(myGarden2.ripenPlant('orange', 1));
console.log(myGarden2.harvestPlant('apple'));
//console.log(myGarden2.harvestPlant('olive'));
//console.log(myGarden2.harvestPlant('raspberry'));
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.
// Uncaught Error Error: The raspberry cannot be harvested before it is ripe.

const myGarden3 = new Garden(250)
console.log(myGarden3.addPlant('apple', 20));
console.log(myGarden3.addPlant('orange', 200));
console.log(myGarden3.addPlant('raspberry', 10));
console.log(myGarden3.ripenPlant('apple', 10));
console.log(myGarden3.ripenPlant('orange', 1));
console.log(myGarden3.harvestPlant('orange'));
console.log(myGarden3.generateReport());
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)

const myGarden4 = new Garden(250)
console.log(myGarden4.addPlant('apple', 20));
console.log(myGarden4.addPlant('orange', 200));
console.log(myGarden4.addPlant('raspberry', 10));
console.log(myGarden4.ripenPlant('apple', 10));
console.log(myGarden4.ripenPlant('orange', 1));
console.log(myGarden4.harvestPlant('orange'));
console.log(myGarden4.generateReport());
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
