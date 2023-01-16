window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');

  publishBtn.addEventListener('click', publish);
  clearBtn.addEventListener('click', () => {
    publishedList.innerHTML = '';
  });

  function publish(e) {
    e.preventDefault();
    const titleValue = title.value;
    const categoryValue = category.value;
    const contentValue = content.value;

    if (!titleValue || !categoryValue || !contentValue) {
      throw new Error('There are blank fields!');
    }
    const li = genElement('li', reviewList, null, 'rpost');
    const article = genElement('article', li);
    genElement('h4', article, `${titleValue}`);
    genElement('p', article, `Category: ${categoryValue}`);
    genElement('p', article, `Content: ${contentValue}`);
    const editBtn = genElement('button', li, 'Edit', 'action-btn edit');
    const approveBtn = genElement('button', li, 'Approve', 'action-btn approve');

    [title.value, category.value, content.value] = ['', '', ''];

    editBtn.addEventListener('click', edit);
    approveBtn.addEventListener('click', approve);

    function edit() {
      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;
      li.remove();
    }
    function approve() {
      publishedList.appendChild(li);
      editBtn.remove();
      approveBtn.remove();
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