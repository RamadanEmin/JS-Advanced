function magicMatrices(matrix = []) {
    let rowSum = [];
    let colSum = [];
    for (let row = 0; row < matrix.length; row++) {
        let sum = matrix[row].reduce((a, b) => a + b, 0);
        rowSum.push(sum);
    }
    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i])
        }
        let sum = newRow.reduce((a, b) => a + b, 0);
        colSum.push(sum);
    }
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));