class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(input) {
        return typeof input ==='number'
            ? new Hex(this.value + input)
            : new Hex(this.value + input.value);
    }
    minus(input) {
        return typeof input ==='number'
            ? new Hex(this.value - input)
            : new Hex(this.value - input.value);
    }
    parse(number) {
        return parseInt(number, 16);
    }
};

let FF = new Hex(255);
console.log(FF.toString());                     //0xFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());              //0xF
console.log(a.plus(b).toString() === '0xF');    //true
console.log(FF.parse('AAA'));                   //2730
