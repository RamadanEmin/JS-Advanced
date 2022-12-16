function biggerHalf(input = []) {
    let biggerHalfNumber = input.sort((a, b) => a - b).slice(input.length / 2);
    return biggerHalfNumber;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));