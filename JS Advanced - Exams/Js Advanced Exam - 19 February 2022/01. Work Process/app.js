function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const tbody = document.getElementById('tbody');
    const addWorkerBtn = document.getElementById('add-worker');
    const sum = document.getElementById('sum');
    let sumValue = 0;

    addWorkerBtn.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const birthValue = birth.value;
        const positionValue = position.value;
        const salaryValue = salary.value;

        if (!firstNameValue || !lastNameValue || !emailValue || !birthValue || !positionValue || !salaryValue) {
            throw new Error('There are blank fields!');
        }
        const tr = genElement('tr', tbody);
        genElement('td', tr, `${firstNameValue}`);
        genElement('td', tr, `${lastNameValue}`);
        genElement('td', tr, `${emailValue}`);
        genElement('td', tr, `${birthValue}`);
        genElement('td', tr, `${positionValue}`);
        genElement('td', tr, `${salaryValue}`);
        const td = genElement('td', tr);
        const firedBtn = genElement('button', td, 'Fired', 'fired');
        const editBtn = genElement('button', td, 'Edit', 'edit');

        sumValue += Number(salaryValue);
        sum.textContent = sumValue.toFixed(2);

        [firstName.value, lastName.value, email.value, birth.value, position.value, salary.value] = ['', '', '', '', '', ''];

        firedBtn.addEventListener('click', fired);
        editBtn.addEventListener('click', edit);

        function fired() {
            tr.remove();

            sumValue -= Number(salaryValue);
            sum.textContent = sumValue.toFixed(2);
        }
        function edit() {
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = salaryValue;

            tr.remove();

            sumValue -= Number(salaryValue);
            sum.textContent = sumValue.toFixed(2);

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
solve()