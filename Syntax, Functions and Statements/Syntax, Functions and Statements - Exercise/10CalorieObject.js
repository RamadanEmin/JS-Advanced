function calorieObject(input = []) {
    let calories={};
    for (let i = 0; i < input.length; i+=2) {
        const productName = input[i];
        const calorie = Number(input[i+1]);
       calories[productName]=calorie;
    }
    console.log(calories);
}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])