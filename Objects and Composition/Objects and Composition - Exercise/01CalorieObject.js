function calorieObject(input = []) {
    const obj = {};
    for (let i = 0; i < input.length; i++) {
        const food = input[i];
        const calories = Number(input[++i]);
        obj[food] = calories;
    }
    return obj;
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
