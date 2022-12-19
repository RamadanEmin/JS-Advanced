function spiralMatrix(height, width) {
    let matrix = [];
    let [count, maxCount, minRow, maxRow, minCol, maxCol] = [0, height * width, 0, height - 1, 0, width - 1];
    for (let row = 0; row < height; row++) {
        matrix[row] = [];
    }
    while (maxCount > count) {
        for (let col = minCol; col <= maxCol && count < maxCount; col++) {
            matrix[minRow][col] = ++count;
        }
        minRow++;
        for (let row = minRow; row <= maxRow && count < maxCount; row++) {
            matrix[row][maxCol] = ++count;
        }
        maxCol--;
        for (let col = maxCol; col >= minCol && count < maxCount; col--) {
            matrix[maxRow][col] = ++count;
        }
        maxRow--;
        for (let row = maxRow; row >= minRow && count < maxCount; row--) {
            matrix[row][minCol] = ++count;
        }
        minCol++;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);