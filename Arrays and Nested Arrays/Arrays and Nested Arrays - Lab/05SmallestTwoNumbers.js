function smallestTwoNumbers(input = []) {
    let smallersNumber = input.sort((a, b) => a - b).slice(0, 2);
    return smallersNumber.join(' ');
}
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));