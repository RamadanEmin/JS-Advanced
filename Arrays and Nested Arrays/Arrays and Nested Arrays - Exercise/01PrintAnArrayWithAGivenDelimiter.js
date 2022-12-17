function printAnArrayWithAGivenDelimiter(arr = [], delimiter) {
    return arr.join(delimiter);
}
console.log(printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));
