function createTicket(input = [], criteria) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    };

    const result = [];
    input.forEach(el => result.push(new Tickets(...el.split('|'))));
    const sortNumber = ((a, b) => a - b);
    const sortString = ((a, b) => a[criteria].localeCompare(b[criteria]));
    return criteria === 'price'
        ? result.sort(sortNumber)
        : result.sort(sortString);
}

console.log(createTicket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
// [Ticket {
//     destination: 'Boston',
//     price: 126.20,
//     status: 'departed'
// },
//     Ticket {
//         destination: 'New York City',
//         price: 95.99,
//         status: 'available'
//     },
//     Ticket {
//         destination: 'New York City',
//         price: 95.99,
//         status: 'sold'
//     },
//     Ticket {
//         destination: 'Philadelphia',
//         price: 94.20,
//         status: 'available'
//     }]


console.log(createTicket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));
// [Ticket {
//     destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available'
// },
//     Ticket {
//         destination: 'New York City',
//         price: 95.99,
//         status: 'available'
//     },
//     Ticket {
//         destination: 'Boston',
//         price: 126.20,
//         status: 'departed'
//     },
//     Ticket {
//         destination: 'New York City',
//         price: 95.99,
//         status: 'sold'
//     }]