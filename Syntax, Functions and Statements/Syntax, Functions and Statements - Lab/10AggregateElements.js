function aggregateElements(input = []) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverseSum = 0;
    input.forEach(num => inverseSum += 1 / num);
    let concat = input.join('');
    console.log(`${sum}\n${inverseSum}\n${concat}`);
}
aggregateElements([2, 4, 8, 16]);