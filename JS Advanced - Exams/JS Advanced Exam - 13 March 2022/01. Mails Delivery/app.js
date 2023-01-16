function solve() {
    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const listMails = document.getElementById('list');
    const sendList = document.getElementsByClassName('sent-list')[0];
    const deleteList = document.getElementsByClassName('delete-list')[0];

    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);

    function add(e) {
        e.preventDefault();
        const recipientNameValue = recipientName.value;
        const titleValue = title.value;
        const messageValue = message.value;

        if (!recipientNameValue || !titleValue || !messageValue) {
            throw new Error('There are blank fields!');
        }

        const li = genElement('li', listMails);
        genElement('h4', li, `Title: ${titleValue}`);
        genElement('h4', li, `Recipient Name: ${recipientNameValue}`);
        genElement('span', li, `${messageValue}`);
        const div = genElement('div', li);
        div.setAttribute('id', 'list-action');
        const sendBtn = genElement('button', div, 'Send');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        const deleteBtn = genElement('button', div, 'Delete');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');

        [recipientName.value, title.value, message.value] = ['', '', ''];

        sendBtn.addEventListener('click', send);
        deleteBtn.addEventListener('click', deleteMail);

        function send() {
            li.innerHTML = '';
            li.className = '';
            sendList.appendChild(li);
            genElement('span', li, `To: ${recipientNameValue}`);
            genElement('span', li, `Title: ${titleValue}`);
            const divElement = genElement('div', li);
            divElement.className = 'btn';
            divElement.appendChild(deleteBtn);
            deleteBtn.removeAttribute('id');
            deleteBtn.className = 'delete';
        }
        function deleteMail() {
            li.innerHTML = '';
            li.className = '';
            deleteList.appendChild(li);
            genElement('span', li, `To: ${recipientNameValue}`);
            genElement('span', li, `Title: ${titleValue}`)
        }
    }

    function reset(e) {
        e.preventDefault();
        [recipientName.value, title.value, message.value] = ['', '', ''];
    }

    function genElement(tag, parent, textContent) {
        const element = document.createElement(tag);
        if (textContent) {
            element.textContent = textContent;
        }
        parent.appendChild(element);
        return element;
    }
}
solve()