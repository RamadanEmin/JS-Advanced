function stringLength(paramOne, paramTwo, paramThree) {
    let firstParamLength = paramOne.length;
    let secondParamLength = paramTwo.length;
    let thirdParamLength = paramThree.length;
    let sumLength = firstParamLength + secondParamLength + thirdParamLength;
    let averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake')