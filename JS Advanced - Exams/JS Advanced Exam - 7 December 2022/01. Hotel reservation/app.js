window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');

    nextBtn.addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        verification.textContent ='';
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const dateInValue = dateIn.value;
        const dateOutValue = dateOut.value;
        const peopleCountValue = peopleCount.value;

        if (!firstNameValue || !lastNameValue || !dateInValue || !dateOutValue || !peopleCountValue || new Date(dateInValue) >= new Date(dateOutValue)) {
            alert('All fields must be filled in correctly!');
            return;
        }

        const liElement = genElement('li', infoList, null, 'reservation-content');
        const articleElement = genElement('article', liElement);
        genElement('h3', articleElement, `Name: ${firstNameValue} ${lastNameValue}`);
        genElement('p', articleElement, `From date: ${dateInValue}`);
        genElement('p', articleElement, `To date: ${dateOutValue}`);
        genElement('p', articleElement, `For ${peopleCountValue} people`);
        const editBtn = genElement('button', liElement, 'Edit', 'edit-btn');
        const continueBtn = genElement('button', liElement, 'Continue', 'continue-btn');

        [firstName.value, lastName.value, dateIn.value, dateOut.value, peopleCount.value] = ['', '', '', '', ''];

        nextBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        function onEdit() {
            infoList.remove();
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            dateIn.value = dateInValue;
            dateOut.value = dateOutValue;
            peopleCount.value = peopleCountValue;
    
            nextBtn.disabled = false;
        }

        function onContinue() {
            confirmList.appendChild(liElement);

            editBtn.remove();
            continueBtn.remove();
            const confirmBtn = genElement('button', liElement, 'Confirm', 'confirm-btn');
            const cancelBtn = genElement('button', liElement, 'Cancel', 'cancel-btn');

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);

            function onConfirm() {
                liElement.remove();
                nextBtn.disabled = false;
                verification.textContent = 'Confirmed.';
                verification.className = 'reservation-confirmed';
            }

            function onCancel() {
                liElement.remove();
                nextBtn.disabled = false;
                verification.textContent = 'Cancelled.';
                verification.className = 'reservation-cancelled';
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