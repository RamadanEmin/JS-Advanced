function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul');

    let [inputName, inputAge, inputKing, inputCurrentOwner] = inputElements;

    buttonElement.addEventListener('click', onAddBtnClick);

    function onAddBtnClick(e) {
        e.preventDefault();
        if (!inputElements.every(el => el.value)) {
            throw new Error('There are blank fields!');
        }
        if (!Number(inputAge.value)) {
            throw new Error('Must be a number!');
        }
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        pElement.innerHTML = `<strong>${inputName.value}</strong> is a <strong>${inputAge.value}</strong> year old <strong>${inputKing.value}</strong>`;

        let spanElement = document.createElement('span');
        spanElement.textContent = `Owner: ${inputCurrentOwner.value}`;

        let contactBtnElement = document.createElement('button');
        contactBtnElement.textContent = `Contact with owner`;

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(contactBtnElement);
        adoptionUlElement.appendChild(liElement);
        [inputName.value, inputAge.value, inputKing.value, inputCurrentOwner.value] = ['', '', '', ''];

        contactBtnElement.addEventListener('click', onContactBtnClick);

    }
    function onContactBtnClick(e) {
        let parent = e.currentTarget.parentElement;
        e.currentTarget.remove();
        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        inputElement.setAttribute('placeholder', 'Enter your names');
        let takeItBtnElement = document.createElement('button');
        takeItBtnElement.textContent = 'Yes! I take it!';

        divElement.appendChild(inputElement);
        divElement.appendChild(takeItBtnElement);
        parent.appendChild(divElement);

        takeItBtnElement.addEventListener('click', onTakeItBtnClick);

        function onTakeItBtnClick(e) {
            if (inputElement.value === '') {
                throw new Error('The owner\'s name is missing!');
            }
            let parentBtnElement = e.currentTarget.parentElement;
            let liElement = parentBtnElement.parentElement;     

            let newOwnerInputElement = liElement.querySelector('input');           
            let ownerSpanElement = liElement.querySelector('span');

            let newOwnerName = newOwnerInputElement.value;
            parentBtnElement.remove();

            let checkBtnElement = document.createElement('button');
            ownerSpanElement.textContent = `New Owner: ${newOwnerName}`;
            checkBtnElement.textContent = 'Checked';
            liElement.appendChild(checkBtnElement);
            adoptedUlElement.appendChild(liElement);
            
            checkBtnElement.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
            });
        }
    }
}
