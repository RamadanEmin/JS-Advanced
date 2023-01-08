(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
        // const arr = [];
        // for (let i = n; i < this.length; i++) {
        //     arr.push(this[i]);
        // }
        // return arr;
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
        // const arr = [];
        // for (let i = 0; i < n; i++) {
        //     arr.push(this[i]);
        // }
        // return arr;
    };
    Array.prototype.sum = function () {
        return this.reduce((acc, cur) => acc + cur, 0);
        // let sum = 0;
        // for (const num of this) {
        //     sum += num;
        // }
        // return sum;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
        // let sum = 0;
        // for (const num of this) {
        //     sum += num;
        // }
        // return sum / this.length;
    };
})();

const myArr = [1, 2, 3];
console.log(myArr.last());     // 3
console.log(myArr.skip(1));    // [2, 3]
console.log(myArr.take(1));    // [1]
console.log(myArr.sum(1));     // 6
console.log(myArr.average(1)); // 2 
