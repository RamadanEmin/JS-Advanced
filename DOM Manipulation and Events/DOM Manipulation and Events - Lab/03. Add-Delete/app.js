function addItem() {
    const listElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');
    if (inputElement.value.length === 0) return;

    function createElement(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }

    let liElement = createElement('li', inputElement.value);
    listElement.appendChild(liElement);
    inputElement.value = '';

    let deleteElement = createElement('a', '[Delete]');
    deleteElement.href = '#';
    liElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
}