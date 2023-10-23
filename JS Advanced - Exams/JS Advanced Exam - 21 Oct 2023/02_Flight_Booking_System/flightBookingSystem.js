class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flight = this.flights.find(f => f.flightNumber === flightNumber);

        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(f => f.flightNumber === flightNumber);
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        let criteria = flight.price <= 100 ? 'cheap' : 'expensive';

        this.bookings.push({ passengerName, flightNumber, criteria });
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const flight = this.bookings.find(f => f.flightNumber === flightNumber);

        if (!flight) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.filter(f => f.flightNumber !== flightNumber);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        const result = [];

        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria === 'all') {
            result.push(`All bookings(${this.bookings.length}):`);
            for (let { passengerName, flightNumber } of this.bookings) {
                result.push(`${passengerName} booked for flight ${flightNumber}.`);
            }
        } else if (criteria === 'cheap') {
            const flight = this.bookings.find(f => f.criteria === 'cheap');

            if (!flight) {
                return "No cheap bookings found.";
            }

            const cheapBokings = this.bookings.filter(f => f.criteria === 'cheap');

            result.push("Cheap bookings:");

            for (const { passengerName, flightNumber } of cheapBokings) {
                
                result.push(`${passengerName} booked for flight ${flightNumber}.`);
            }
        }else if (criteria === 'expensive') {
            const flight = this.bookings.find(f => f.criteria === 'expensive');

            if (!flight) {
                return "No expensive bookings found.";
            }

            const expensiveBokings = this.bookings.filter(f => f.criteria === 'expensive');

            result.push("Expensive bookings:");

            for (const { passengerName, flightNumber } of expensiveBokings) {
                result.push(`${passengerName} booked for flight ${flightNumber}.`);
            }
        }

        return result.join('\n');
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
