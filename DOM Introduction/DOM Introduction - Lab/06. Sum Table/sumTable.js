function sumTable() {
    const rows = document.querySelectorAll('tr td:nth-of-type(2)');
    let total = 0;
    for (let i = 0; i < rows.length - 1; i++) {
        const cost = rows[i].textContent
        total += Number(cost);
    }
    document.getElementById('sum').textContent=total;
}