function townPopulation(cities = []) {
    const towns = {};
    for (const city of cities) {
        let [town, population] = city.split(' <-> ');
        population = Number(population);
        if (towns[town] !== undefined) {
            population += towns[town];
        }
        towns[town] = population;
    }
    for (const [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);