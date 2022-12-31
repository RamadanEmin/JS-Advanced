function calculator() {
    let fieldOne = null;
    let fieldTwo = null;
    let result = null;
    return {
        init(selector1, selector2, resultSelector) {
            fieldOne = document.querySelector(selector1);
            fieldTwo = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            result.value = Number(fieldOne.value) + Number(fieldTwo.value);
        },
        subtract() {
            result.value = Number(fieldOne.value) - Number(fieldTwo.value);
        }
    };
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




