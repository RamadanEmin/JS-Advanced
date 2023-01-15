window.addEventListener('load', solve);

function solve() {
    const type = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const sendBtn = document.querySelector('button[type="submit"]');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearBtn = document.getElementsByClassName('clear-btn')[0];

    sendBtn.addEventListener('click', sendForm);

    function sendForm(e) {
        e.preventDefault();
        const typeValue = type.value;
        const descriptionValue = description.value;
        const nameValue = name.value;
        const phoneValue = phone.value;

        if (!descriptionValue || !nameValue || !phoneValue) {
            throw new Error('There are blank fields!');
        }

        const div = genElement('div', receivedOrders, '', 'container');
        genElement('h2', div, `Product type for repair: ${typeValue}`);
        genElement('h3', div, `Client information: ${nameValue}, ${phoneValue}`);
        genElement('h4', div, `Description of the problem: ${descriptionValue}`);
        const startBtn = genElement('button', div, 'Start repair', 'start-btn');
        const finishBtn = genElement('button', div, 'Finish repair', 'finish-btn');

        [description.value, name.value, phone.value] = ['', '', ''];
        finishBtn.setAttribute('disabled', true);

        startBtn.addEventListener('click', () => {
            startBtn.setAttribute('disabled', true);
            finishBtn.removeAttribute('disabled');
        });
        finishBtn.addEventListener('click', () => {
            completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        });
        clearBtn.addEventListener('click', () => {
            Array
                .from(completedOrders.querySelectorAll('.container'))
                .forEach(el => el.remove());
        });
    }
    function genElement(tag, parent, textContent, className) {
        const element = document.createElement(tag);
        if (textContent) {
            element.textContent = textContent;
        }
        if (className) {
            element.className = className;
        }
        parent.appendChild(element);
        return element;
    }
}