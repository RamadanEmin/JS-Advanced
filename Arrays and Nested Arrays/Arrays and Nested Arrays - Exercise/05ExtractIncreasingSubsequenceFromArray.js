function extractIncreasingSubsequenceFromArray(input = []) {
    const extract = input.reduce((acc, curentElement) => {
        if (acc[acc.length - 1] <= curentElement || acc.length === 0) {
            acc.push(curentElement);
        }
        return acc;
    }, []);
    return extract;
    // let biggestNumber = input.shift();
    // const result = [biggestNumber];
    // for (const item of input) {
    //     if (item >= biggestNumber) {
    //         biggestNumber=item;
    //         result.push(item);
    //     }
    // }
    // return result;
}
console.log(extractIncreasingSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));