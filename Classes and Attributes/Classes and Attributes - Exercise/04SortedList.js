class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (0 <= index && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
        } else {
            throw new Error('Invalid index');
        }
    }
    get(index) {
        if (0 <= index && index < this.collection.length) {
            return this.collection[index];
        } else {
            throw new Error('Invalid index');
        }
    }
};

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));   // 6
list.remove(1);
console.log(list.get(1));   // 7