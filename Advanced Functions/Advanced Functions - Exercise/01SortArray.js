function sortArray(array, order) {
    const sortOrder = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };
    array.sort(sortOrder[order]);
    return array;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
