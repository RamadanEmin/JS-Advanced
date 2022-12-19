function diagonalAttack(input = []) {
    const matrix = input.map(row => row.split(' ').map(Number));
    const matrixLength = matrix.length;
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    for (let row = 0; row < matrixLength; row++) {
        mainDiagonal += matrix[row][row];
        secondDiagonal += matrix[row][matrixLength - row - 1];
    }
    if (mainDiagonal === secondDiagonal) {
        for (let row = 0; row < matrixLength; row++) {
            for (let col = 0; col < matrixLength; col++) {
                if (row !== col && col !== matrixLength - row - 1) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }
    }
    return matrix.forEach(row => console.log(row.join(' ')));
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'])