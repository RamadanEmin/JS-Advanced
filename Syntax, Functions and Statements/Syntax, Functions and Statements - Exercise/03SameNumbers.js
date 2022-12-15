function sameNumbers(num) {
    let number = Number(num);
    let lastDigit = number % 10;
    let sum = 0;
    let isSame = true;
    while (number !== 0) {
        let nextDigit = number % 10;
        if (lastDigit !== nextDigit) {
            isSame = false;
        }
        sum += nextDigit;
        number = Math.floor(number / 10);
    }
    return `${isSame}\n${sum}`
}
console.log(sameNumbers(2222222));