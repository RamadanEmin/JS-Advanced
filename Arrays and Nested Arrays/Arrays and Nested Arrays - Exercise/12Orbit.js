function orbit([height, width, x, y]) {
    const matrix = new Array(height).fill([]).map(() => new Array(width));
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
    orbit([5, 5, 2, 2]);
    orbit([4, 4, 0, 0]);
    orbit([3, 3, 2, 2]);