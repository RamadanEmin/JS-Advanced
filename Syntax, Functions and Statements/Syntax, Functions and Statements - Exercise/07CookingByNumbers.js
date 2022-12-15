function cookingByNumbers(num, ...params) {
    num = Number(num);
    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - num * 0.2
    };
    for (let i = 0; i < params.length; i++) {
        num = operations[params[i]](num);
        console.log(num);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')