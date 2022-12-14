function squareOfStars(num) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num).trimEnd());
    }
}
squareOfStars(3);