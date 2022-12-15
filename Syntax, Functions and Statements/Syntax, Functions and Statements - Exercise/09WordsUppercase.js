function wordsUppercase(input = '') {
    let pattern = /\w+/g;
    const words = input.match(pattern).join(', ').toUpperCase();
    return words;
}
console.log(wordsUppercase('Hi, how are you?'));