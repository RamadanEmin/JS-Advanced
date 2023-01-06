function juiceFlavors(input = []) {
    const juices = new Map();
    const producedBottles = new Map();

    input.forEach(product => {
        let [juice, quantity] = product.split(' => ');
        quantity = Number(quantity);
        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }
        juices.set(juice, juices.get(juice) + quantity);
        if (juices.get(juice) >= 1000) {
            producedBottles.set(juice, Math.floor(juices.get(juice) / 1000));
        }
    });
    producedBottles.forEach((juiceQuantity, juiceName) => console.log(`${juiceName} => ${juiceQuantity}`));
}
juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
// Orange => 2
// Peach => 2

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
// Pear => 8
// Watermelon => 10
// Kiwi => 4
