function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsElement = document.getElementById('items');
    const liElement = document.createElement('li');
    if (inputElement.value === '') {
        return;
    }
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);
    inputElement.value = '';
}
