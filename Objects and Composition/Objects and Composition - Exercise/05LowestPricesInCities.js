function lowestPricesInCities(input = []) {
    const products = {};
    let result = [];
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (products[product]) {
            if (price >= products[product].price) {
                continue;
            }
        }
        products[product] = { town, price };
    }
    for (const product in products) {
        result.push(`${product} -> ${products[product].price} (${products[product].town})`);
    }
    return result.join('\n');
}
console.log(lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));