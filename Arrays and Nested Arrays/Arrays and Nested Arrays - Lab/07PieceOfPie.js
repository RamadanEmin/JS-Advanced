function pieceOfPie(input = [], start, end) {
    const startIndex = input.indexOf(start);
    const endIndex = input.indexOf(end);
    const result = input.slice(startIndex, endIndex + 1);
    return result;
}
console.log(pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));