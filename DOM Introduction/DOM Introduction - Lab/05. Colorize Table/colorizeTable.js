function colorize() {
    const rowElements = [...document.querySelectorAll('tr:nth-of-type(2n)')];
    // console.log(rowElements);
    // for (const row of rowElements) {
    //     row.style.backgroundColor = 'teal';
    // }
    rowElements.forEach(x => x.style.background = 'teal');
}