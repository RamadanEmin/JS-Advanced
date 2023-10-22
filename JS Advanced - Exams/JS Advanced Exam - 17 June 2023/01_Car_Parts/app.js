window.addEventListener('load', solve);

function solve() {
        const model = document.getElementById('car-model');
        const year = document.getElementById('car-year');
        const partName = document.getElementById('part-name');
        const partNumber = document.getElementById('part-number');
        const condition = document.getElementById('condition');
        const nextBtn = document.getElementById('next-btn');
        const info = document.getElementsByClassName('info-list')[0];
        const confirm = document.getElementsByClassName('confirm-list')[0];
        const img = document.getElementById('complete-img');
        const text = document.getElementById('complete-text');

        nextBtn.addEventListener('click', next);

        function next(e) {
                e.preventDefault();

                const modelValue = model.value;
                const yearValue = year.value;
                const partNameValue = partName.value;
                const partNumberValue = partNumber.value;
                const conditionValue = condition.value;

                if (!modelValue || yearValue < 1980 || yearValue > 2023 || !partNameValue || !partNumberValue || !conditionValue) {
                        return;
                }

                const li = genElement('li', info, null, 'part-content');
                const article = genElement('article', li);
                genElement('p', article, `Car Model: ${modelValue}`);
                genElement('p', article, `Car Year: ${yearValue}`);
                genElement('p', article, `Part Name: ${partNameValue}`);
                genElement('p', article, `Part Number: ${partNumberValue}`);
                genElement('p', article, `Condition: ${conditionValue}`);
                const editBtn = genElement('button', li, 'Edit', 'edit-btn');
                const continueBtn = genElement('button', li, 'Continue', 'continue-btn');

                [model.value, year.value, partName.value, partNumber.value, condition.value] = ['', '', '', '', ''];

                nextBtn.disabled = true;
                img.hidden = true;
                text.textContent = '';

                editBtn.addEventListener('click', edit);
                continueBtn.addEventListener('click', continueFn);

                function edit() {
                        li.remove();
                        model.value = modelValue;
                        year.value = yearValue;
                        partName.value = partNameValue;
                        partNumber.value = partNumberValue;
                        condition.value = conditionValue;

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
                                li.remove();
                                nextBtn.disabled = false;

                                img.hidden = false;
                                text.textContent = 'Part is Ordered!';
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