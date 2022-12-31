function add(num1) {
    function sum(num2) {
        num1 += num2;
        return sum;
    };
    sum.toString = () => num1;
    return sum;
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());