function generateReport() {
    const textArea = document.getElementById('output');
    const headers = document.querySelectorAll('thead tr th input');
    const rows = document.querySelectorAll('tbody tr');
    const result = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = Array.from(rows[i].getElementsByTagName('td')).map(r => r.textContent);
        for (let j = 0; j < headers.length; j++) {
            if (headers[j].checked) {
                obj[headers[j].name] = values[j];
            }
        }
        result.push(obj);
    }
    textArea.value = JSON.stringify(result, null, 2);
}