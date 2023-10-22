window.addEventListener('load', solve);

function solve() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contact = document.getElementById('contact-number');
    const type = document.getElementById('class-type');
    const time = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const info = document.getElementsByClassName('class-info')[0];
    const confirm = document.getElementsByClassName('confirm-class')[0];
    const main = document.getElementById('main');
    const body = document.getElementById('body');

    nextBtn.addEventListener('click', next);

    function next(e) {
        e.preventDefault();

        const nameValue = name.value;
        const emailValue = email.value;
        const contactValue = contact.value;
        const typeValue = type.value;
        const timeValue = time.value;

        if (!nameValue || !emailValue || !contactValue || !typeValue || !timeValue) {
            throw new Error('There are blank fields');
        }

        const li = genElement('li', info, null, 'info-item');
        const article = genElement('article', li, null, 'personal-info');
        genElement('p', article, `${nameValue}`);
        genElement('p', article, `${emailValue}`);
        genElement('p', article, `${contactValue}`);
        genElement('p', article, `${typeValue}`);
        genElement('p', article, `${timeValue}`);
        const editBtn = genElement('button', li, 'Edit', 'edit-btn');
        const continueBtn = genElement('button', li, 'Continue', 'continue-btn');

        [name.value, email.value, contact.value, type.value, time.value] = ['', '', '', '', ''];

        nextBtn.disabled = true;

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueFn);

        function edit() {
            li.remove();
            name.value = nameValue;
            email.value = emailValue;
            contact.value = contactValue;
            type.value = typeValue;
            time.value = timeValue;

            nextBtn.disabled = false;

        }

        function continueFn() {
            confirm.appendChild(li);
            editBtn.remove();
            continueBtn.remove();
            const cancelBtn = genElement('button', li, 'Cancel', 'cancel-btn');
            const confirmBtn = genElement('button', li, 'Confirm', 'confirm-btn');

            cancelBtn.addEventListener('click', cancel);
            confirmBtn.addEventListener('click', confirmFn);

            function cancel() {
                li.remove();
                nextBtn.disabled = false;
            }

            function confirmFn() {
                main.remove();
                const heading = genElement('h1', body, 'Thank you for scheduling your appointment, we look forward to seeing you!');
                heading.id = 'thank-you';
                const btn = genElement('button', body, 'Done');
                btn.id = 'done-btn';
            }
        }
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