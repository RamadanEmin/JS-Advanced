function sumFirstLast(input = []) {
    let firstElement = input.shift();
    let lastElement = input.pop() || 0;
    let sum = Number(firstElement) + Number(lastElement);
    return sum;
}
console.log(sumFirstLast(['20', '30', '40']));