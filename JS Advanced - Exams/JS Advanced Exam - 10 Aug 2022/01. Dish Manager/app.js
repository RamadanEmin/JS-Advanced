window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const gender = document.getElementById('genderSelect');
  const task = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const inProgress = document.getElementById('in-progress');
  const progressCount = document.getElementById('progress-count');
  const finishedList = document.getElementById('finished');
  const clearBtn = document.getElementById('clear-btn');
  let count = 0;

  submitBtn.addEventListener('click', submit);
  clearBtn.addEventListener('click', () => {
    finishedList.innerHTML = '';
  });

  function submit(e) {
    e.preventDefault();
    firstNameValue = firstName.value;
    lastNameValue = lastName.value;
    genderValue = gender.value;
    ageValue = age.value;
    taskValue = task.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !taskValue) {
      throw new Error('There are blank fields!');
    }
    const li = genElement('li', inProgress, null, 'each-line');
    const article = genElement('article', li);
    genElement('h4', article, `${firstNameValue} ${lastNameValue}`);
    genElement('p', article, `${genderValue}, ${ageValue}`);
    genElement('p', article, `Dish description: ${taskValue}`);
    const editBtn = genElement('button', li, 'Edit', 'edit-btn');
    const markingBtn = genElement('button', li, 'Mark as complete', 'complete-btn');

    [firstName.value, lastName.value, gender.value, age.value, task.value] = ['', '', '', '', ''];
    count++;
    progressCount.textContent = count;

    editBtn.addEventListener('click', edit);
    markingBtn.addEventListener('click', marking);

    function edit() {
      li.remove();
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      gender.value = genderValue;
      age.value = ageValue;
      task.value = taskValue;
      count--;
      progressCount.textContent = count;
    }
    function marking() {
      finishedList.appendChild(li);
      editBtn.remove();
      markingBtn.remove();

      count--;
      progressCount.textContent = count;
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