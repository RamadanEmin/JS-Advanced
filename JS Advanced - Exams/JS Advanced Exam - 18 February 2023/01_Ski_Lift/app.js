window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const peopleNumber = document.getElementById("people-count");
    const date = document.getElementById("from-date");
    const days = document.getElementById("days-count");
    const nextBtn = document.getElementById("next-btn");
    const infoList = document.getElementsByClassName("ticket-info-list")[0];
    const confirmList = document.getElementsByClassName("confirm-ticket")[0];
    const main = document.getElementById("main");
    const body = document.getElementById("body");

    nextBtn.addEventListener('click', ticketInfo);

    function ticketInfo(e) {
        e.preventDefault();

        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const peopleNumberValue = peopleNumber.value;
        const dateValue = date.value;
        const daysValue = days.value;

        if (!firstNameValue || !lastNameValue || !peopleNumberValue || !dateValue || !daysValue) {
            return;
        }

        const li = genElement('li', infoList, null, 'ticket');
        const article = genElement('article', li,);
        genElement('h3', article, `Name: ${firstNameValue} ${lastNameValue}`);
        genElement('p', article, `From date: ${dateValue}`);
        genElement('p', article, `For ${daysValue} days`);
        genElement('p', article, `For ${peopleNumberValue} people`);
        const editBtn = genElement('button', li, 'Edit', 'edit-btn');
        const continueBtn = genElement('button', li, 'Continue', 'continue-btn');

        [firstName.value, lastName.value, peopleNumber.value, date.value, days.value] = ['', '', '', '', ''];

        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueFn);

        function edit() {
            li.remove();
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            peopleNumber.value = peopleNumberValue;
            date.value = dateValue;
            days.value = daysValue;

            nextBtn.disabled = false;

        }

        function continueFn() {
            confirmList.appendChild(li);
            editBtn.remove();
            continueBtn.remove();
            const confirmBtn = genElement('button', li, 'Confirm', 'confirm-btn');
            const cancelBtn = genElement('button', li, 'Cancel', 'cancel-btn');

            confirmBtn.addEventListener('click', confirm);
            cancelBtn.addEventListener('click', cancel);

            function confirm() {
                main.remove();

                const h1 = genElement('h1', body, 'Thank you, have a nice day!');
                h1.id = 'thank-you';
                const button = genElement('button', body, 'Back');
                button.id = 'back-btn';
            }

            function cancel() {
                li.remove();

                nextBtn.disabled = false;
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