function cars(input = []) {
    const carFactoryBuilder = () => {
        let cars = {};
        return {
            create: (name, inherits, parentName) => cars[name] = inherits
                ? Object.create(cars[parentName])
                : {},
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                const entries = [];
                for (const key in cars[name]) {
                    entries.push(`${key}:${cars[name][key]}`)
                }
                console.log(entries.join(','));
            }
        };
    }
    let carFactory = carFactoryBuilder();
    input
        .map(x => x.split(' '))
        .forEach(([command, ...args]) => carFactory[command].apply(null, args));
}
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);