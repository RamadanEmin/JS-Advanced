function rotateArray(input = [], number) {
    let amount = number % input.length;
    const rotation = input.slice();
    for (let i = 0; i < amount; i++) {
        rotation.unshift(rotation.pop());
    }
    return rotation.join(' ');
}
console.log(rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));