window.addEventListener('load', solve);

function solve() {
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const addButtonElement = document.getElementById('add');
    const furnitureListElement = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('.total-price');

    addButtonElement.addEventListener('click', addClickHandler);
    function addClickHandler(e) {
        e.preventDefault();

        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(priceInputElement.value);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';

        if (!model || !description) {
            throw new Error('There are blank fields');
        }
        if (year <= 0 || price <= 0) {
            throw new Error('Cannot have negative values');
        }

        const rowElement = document.createElement('tr');
        const modelCellElement = document.createElement('td');
        const priceCellElement = document.createElement('td');
        const actionCellElement = document.createElement('td');
        const infoButtonElement = document.createElement('button');
        const buyButtonElement = document.createElement('button');
        const contentsRowElement = document.createElement('tr');
        const yearContentElement = document.createElement('td');
        const descriptionContentElement = document.createElement('td');

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');

        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');
        buyButtonElement.addEventListener('click', () => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            rowElement.remove();
            contentsRowElement.remove();
        });

        actionCellElement.appendChild(infoButtonElement);
        actionCellElement.appendChild(buyButtonElement);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);
    }
}