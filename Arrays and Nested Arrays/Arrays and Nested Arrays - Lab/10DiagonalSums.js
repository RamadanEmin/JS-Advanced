function diagonalSums(input = []) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        mainDiagonal += array[firstIndex++];
        secondaryDiagonal += array[secondIndex--];
    });
    return `${mainDiagonal} ${secondaryDiagonal}`;
}
console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));