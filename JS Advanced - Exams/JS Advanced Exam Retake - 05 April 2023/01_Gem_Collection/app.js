window.addEventListener('load', solve);

function solve() {
    const gem = document.getElementById('gem-name');
    const color = document.getElementById('color');
    const carats = document.getElementById('carats');
    const price = document.getElementById('price');
    const type = document.getElementById('type');
    const addBtn = document.getElementById('add-btn');
    const preview = document.getElementById('preview-list');
    const collection = document.getElementById('collection');

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const gemValue = gem.value;
        const colorValue = color.value;
        const caratsValue = carats.value;
        const priceValue = price.value;
        const typeValue = type.value;

        if (!gemValue || !colorValue || !caratsValue || !priceValue || !typeValue) {
            throw new Error('There are blank fields');
        }

        const li = genElement('li', preview, null, 'gem-info');
        const article = genElement('article', li);
        genElement('h4', article, `${gemValue}`);
        genElement('p', article, `Color: ${colorValue}`);
        genElement('p', article, `Carats: ${caratsValue}`);
        genElement('p', article, `Price: ${priceValue}$`);
        genElement('p', article, `Type: ${typeValue}`);
        const saveBtn = genElement('button', li, 'Save to Collection', 'save-btn');
        const editBtn = genElement('button', li, 'Edit Information', 'edit-btn');
        const cancelBtn = genElement('button', li, 'Cancel', 'cancel-btn');

        [gem.value, color.value, carats.value, price.value, type.value] = ['', '', '', '', ''];

        addBtn.disabled = true;

        editBtn.addEventListener('click', edit);
        saveBtn.addEventListener('click', save);
        cancelBtn.addEventListener('click', () => {
            li.remove();
            addBtn.disabled = false;
        });

        function edit() {
            li.remove();
            gem.value = gemValue;
            color.value = colorValue;
            carats.value = caratsValue;
            price.value = priceValue;
            type.value = typeValue;

            addBtn.disabled = false;

        }

        function save() {
            collection.appendChild(li);
            article.remove();
            editBtn.remove();
            saveBtn.remove();
            cancelBtn.remove();
            genElement('p', li, `${gemValue} - Color: ${colorValue}/ Carats: ${caratsValue}/ Price: ${priceValue}$/ Type: ${typeValue}`, 'collection-item');
            addBtn.disabled = false;
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