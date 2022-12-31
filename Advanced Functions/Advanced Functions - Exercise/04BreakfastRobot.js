function breakfastRobot() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    };

    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    const commands = {
        restock,
        prepare,
        report
    };

    function restock(microelement, quantity) {
        microelements[microelement] += quantity;
        return 'Success';
    }
    function prepare(recipe, quantity) {
        const required = Object.assign({}, recipes[recipe]);
        required.order.forEach(key => required[key] *= quantity);
        for (const element of required.order) {
            if (microelements[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }
        required.order.forEach(key => microelements[key] -= required[key]);
        return 'Success';
    }
    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }
    function manager(command) {
        const token = command.split(' ');
        return commands[token[0]](token[1], Number(token[2]));
    }
    return manager;
}
let manager = breakfastRobot();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4")); 