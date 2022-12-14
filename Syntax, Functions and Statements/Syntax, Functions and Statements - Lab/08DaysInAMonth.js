function daysInAMonth(month, year) {
    let days = new Date(year, month, 0).getDate()
    return days;
}
console.log(daysInAMonth(2, 2021));