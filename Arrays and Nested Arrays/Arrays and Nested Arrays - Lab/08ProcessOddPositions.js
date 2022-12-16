function processOddPositions(input = []) {
    let output = input
    .slice()
    .filter((el,index) => index % 2 !== 0)
    .map(el=>el*2)
    .reverse()
    .join(' ');
    return output;
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));