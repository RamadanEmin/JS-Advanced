// solution with class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        const [firstN, lastN] = value.split(' ');
        if (firstN && lastN) {
            this.firstName = firstN;
            this.lastName = lastN;
        }
    }
};

// solution with function constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     Object.defineProperty(this, 'fullName', {
//         enumerable: true,
//         get() {
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set: function(value) {
//             const [firstN, lastN] = value.split(' ');
//             if (firstN && lastN) {
//                 this.firstName = firstN;
//                 this.lastName = lastN;
//             }
//         }
//     });
// }

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
