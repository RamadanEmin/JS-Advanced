window.addEventListener('load', solve);

function solve() {
    const employee = document.getElementById('employee');
    const category = document.getElementById('category');
    const urgency = document.getElementById('urgency');
    const team = document.getElementById('team');
    const description = document.getElementById('description');
    const addBtn = document.getElementById('add-btn');
    const preview = document.getElementsByClassName('preview-list')[0];
    const pending = document.getElementsByClassName('pending-list')[0];
    const resolved = document.getElementsByClassName('resolved-list')[0];

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const employeeValue = employee.value;
        const categoryValue = category.value;
        const urgencyValue = urgency.value;
        const teamValue = team.value;
        const descriptionValue = description.value;

        if (!employeeValue || !categoryValue || !urgencyValue || !teamValue || !descriptionValue) {
            throw new Error('There are blank fields');
        }

        const li = genElement('li', preview, null, 'problem-content');
        const article = genElement('article', li);
        genElement('p', article, `From: ${employeeValue}`);
        genElement('p', article, `Category: ${categoryValue}`);
        genElement('p', article, `Urgency: ${urgencyValue}`);
        genElement('p', article, `Assigned to: ${teamValue}`);
        genElement('p', article, `Description: ${descriptionValue}`);
        const editBtn = genElement('button', li, 'Edit', 'edit-btn');
        const continueBtn = genElement('button', li, 'Continue', 'continue-btn');

        [employee.value, category.value, urgency.value, team.value, description.value] = ['', '', '', '', ''];

        addBtn.disabled = true;

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueFn);

        function edit() {
            li.remove();
            employee.value = employeeValue;
            category.value = categoryValue;
            urgency.value = urgencyValue;
            team.value = teamValue;
            description.value = descriptionValue;

            addBtn.disabled = false;

        }

        function continueFn() {
            pending.appendChild(li);
            editBtn.remove();
            continueBtn.remove();
            const resolveBtn = genElement('button', li, 'Resolved', 'resolve-btn');

            resolveBtn.addEventListener('click', resolve);

            function resolve() {
                resolved.appendChild(li);
                resolveBtn.remove();
                const clearBtn = genElement('button', li, 'Clear', 'clear-btn');

                clearBtn.addEventListener('click', () => { 
                    li.remove(); 
                    addBtn.disabled = false;
                });
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