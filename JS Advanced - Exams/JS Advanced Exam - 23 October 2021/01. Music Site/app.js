window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const hits = document.querySelector('.all-hits-container');
    const saved = document.querySelector('.saved-container');
    const likes = document.querySelector('.likes > p');
    let likesCount = 0;

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const genreValue = genre.value;
        const nameValue = name.value;
        const authorValue = author.value;
        const dateValue = date.value;

        if (!genreValue || !nameValue || !authorValue || !dateValue) {
            throw new Error('There are blank fields!');
        }

        const div = genElement('div', hits, '', 'hits-info');
        const img = genElement('img', div);
        img.src = './static/img/img.png';
        genElement('h2', div, `Genre: ${genreValue}`);
        genElement('h2', div, `Name: ${nameValue}`);
        genElement('h2', div, `Author: ${authorValue}`);
        genElement('h3', div, `Date: ${dateValue}`);
        const saveBtn = genElement('button', div, 'Save song', 'save-btn');
        const likeBtn = genElement('button', div, 'Like song', 'like-btn');
        const deleteBtn = genElement('button', div, 'Delete', 'delete-btn');

        [genre.value, name.value, author.value, date.value] = ['', '', '', ''];

        likeBtn.addEventListener('click', () => {
            likesCount++;
            likes.textContent = `Total Likes: ${likesCount}`;
            likeBtn.setAttribute('disabled', true);
        });

        saveBtn.addEventListener('click', () => {
            saved.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        });

        deleteBtn.addEventListener('click', () => {
            div.remove();
            likesCount--;
            likes.textContent = `Total Likes: ${likesCount}`;
        });
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
        return element
    }
}