function solve() {
    const [onScreenBtn, clearBtn] = document.querySelectorAll('button');
    const [name, hall, price] = document.querySelectorAll('input');
    const [moviesList, archiveList] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

    onScreenBtn.addEventListener('click', onScreen);
    clearBtn.addEventListener('click', clear);

    function onScreen(e) {
        e.preventDefault();
        const ticketPrice = Number(price.value);
        if (name.value && hall.value && ticketPrice) {
            const li = document.createElement('li');
            li.appendChild(creareElement('span', name.value));
            const hallElement = creareElement('strong', `Hall: ${hall.value}`);
            li.appendChild(hallElement);
            const div = document.createElement('div');
            div.appendChild(creareElement('strong', ticketPrice.toFixed(2)));
            const input = creareElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);
            const archieveBtn = div.appendChild(creareElement('button', 'Archive'));
            archieveBtn.addEventListener('click', archieve);
            li.appendChild(div);
            moviesList.appendChild(li);
            [name.value, hall.value, price.value] = ['', '', ''];
            function archieve() {
                const soldTickets = Number(input.value);
                if (input.value === '' || Number.isNaN(soldTickets)) {
                    return;
                }
                archiveList.appendChild(li);
                hallElement.remove();
                div.remove();
                li.appendChild(creareElement('strong', `Total amount: ${(ticketPrice * soldTickets).toFixed(2)}`));
                const deleteBtn = creareElement('button', 'Delete');
                li.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', () => li.remove());
            }
        }
    }
    function clear() {
        Array.from(archiveList.children).forEach(li => li.remove());
    }
    function creareElement(type, content) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}