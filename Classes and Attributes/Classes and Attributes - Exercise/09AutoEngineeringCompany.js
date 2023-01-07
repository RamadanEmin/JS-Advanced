function autoEngineeringCompany(input = []) {
    const cars = new Map();
    input.forEach(car => {
        let [carBrand, carModel, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);
        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }
        cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCars);
    });
    for (const [brand, models] of cars.entries()) {
        console.log(brand);
        for (const [model, prodCars] of models.entries()) {
            console.log(`###${model} -> ${prodCars}`);
        }
    }
}
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ - 24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
