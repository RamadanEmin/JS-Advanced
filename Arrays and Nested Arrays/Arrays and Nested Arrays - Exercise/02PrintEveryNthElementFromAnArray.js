function printEveryNthElementFromAnArray(input = [], step) {
    const output = [];
    for (let i = 0; i < input.length; i += step) {
        output.push(input[i])
    }
    return output;
}
console.log(printEveryNthElementFromAnArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));