window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const main = document.getElementById('main');

  publishBtn.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault(0);
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const ageValue = age.value;
    const storyTitleValue = storyTitle.value;
    const genreValue = genre.value;
    const storyValue = story.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !storyValue) {
      throw new Error('There are blank fields!');
    }

    const li = genElement('li', previewList, null, 'story-info');
    const article = genElement('article', li);
    genElement('h4', article, `Name: ${firstNameValue} ${lastNameValue}`);
    genElement('p', article, `Age: ${ageValue}`);
    genElement('p', article, `Title: ${storyTitleValue}`);
    genElement('p', article, `Genre: ${genreValue}`);
    genElement('p', article, `${storyValue}`);
    const saveBtn = genElement('button', li, 'Save Story', 'save-btn');
    const editBtn = genElement('button', li, 'Edit Story', 'edit-btn');
    const deleteBtn = genElement('button', li, 'Delete Story', 'delete-btn');

    [firstName.value, lastName.value, age.value, storyTitle.value, genre.value, story.value] = ['', '', '', '', '', ''];
    publishBtn.disabled = true;
    saveBtn.disabled = false;
    editBtn.disabled = false;
    deleteBtn.disabled = false;

    saveBtn.addEventListener('click', save);
    editBtn.addEventListener('click', edit);
    deleteBtn.addEventListener('click', deleteContent);

    function edit() {
      li.remove();
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      genre.value = genreValue;
      story.value = storyValue;

      publishBtn.disabled = false;
      saveBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;
    }

    function save() {
      main.innerHTML = '';
      genElement('h1', main, 'Your scary story is saved!');
    }

    function deleteContent() {
      li.remove();
      publishBtn.disabled = false;
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