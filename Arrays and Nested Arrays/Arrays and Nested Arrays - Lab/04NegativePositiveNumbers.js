function negativePositiveNumbers(input = []) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            result.unshift(input[i]);
        } else {
            result.push(input[i]);
        }
    }
    return result.join('\n');
}
console.log(negativePositiveNumbers([3, -2, 0, -1]));