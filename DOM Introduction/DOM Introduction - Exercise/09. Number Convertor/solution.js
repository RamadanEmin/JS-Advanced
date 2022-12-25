function solve() {
    const optionList = document.getElementById('selectMenuTo');
    const input = document.getElementById('input');
    const button = document.querySelector('div#container button');
    const result = document.getElementById('result');
    // add binary option
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    optionList.add(binaryOption);
    // add hexadecimal option
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    optionList.add(hexadecimalOption);
    // convert decimal numbe
    const options = {
        binary: (num) => num.toString(2),
        hexadecimal: (num) => num.toString(16).toUpperCase(),
        '': (num) => num
    };
    // listen for click
    button.addEventListener('click', () => {
        result.value = options[optionList.value](Number(input.value));
    });
}