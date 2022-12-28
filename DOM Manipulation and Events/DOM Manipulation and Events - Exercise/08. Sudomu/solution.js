function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('button')
    const table = document.querySelector('table');
    const result = document.querySelector('#check p');
    const rows = document.querySelectorAll('tbody tr');
    const inputs = document.querySelectorAll('tbody tr td input');
    checkBtn.addEventListener('click', quickCheck);
    clearBtn.addEventListener('click', clear);

    function quickCheck() {
        const isSolved = rightNums();
        table.style.border = isSolved ? '2px solid green' : '2px solid red';
        result.textContent = isSolved ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        result.style.color = isSolved ? 'green' : 'red';
    }
    function clear() {
        table.style.border = '';
        result.textContent = '';
        result.style.color = '';
        for (const input of inputs) {
            input.value = '';
        }
    }
    function rightNums() {
        for (let r = 0; r < rows.length; r++) {
            const [row, col] = [new Set(), new Set()];
            for (let c = 0; c < rows.length; c++) {
                row.add(Number(rows[r].children[c].querySelector('input').value));
                col.add(Number(rows[c].children[r].querySelector('input').value));
            }
            if (row.size < rows.length || col.size < rows.length) {
                return false;
            }
        }
        return true;
    }
}