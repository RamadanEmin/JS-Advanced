function solve() {
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const posts = document.querySelector('.site-content main section');
   const archiveSection = document.querySelector('.archive-section ol');

   const createBtn = document.getElementsByClassName('btn create')[0];

   createBtn.addEventListener('click', createPost);

   function createPost(e) {
      e.preventDefault();
      const titleValue = title.value;
      const article = genElement('article', posts);
      genElement('h1', article, title.value);
      const pCategory = genElement('p', article, 'Category:');
      genElement('strong', pCategory, category.value);
      const pCreator = genElement('p', article, 'Creator:');
      genElement('strong', pCreator, author.value);
      genElement('p', article, content.value);
      const div = genElement('div', article);
      div.className = 'buttons';
      const deleteBtn = genElement('button', div, 'Delete');
      deleteBtn.className = 'btn delete';
      const archiveBtn = genElement('button', div, 'Archive');
      archiveBtn.className = 'btn archive';

      [author.value, title.value, category.value, content.value] = ['', '', '', ''];
      deleteBtn.addEventListener('click', deleteArticle);
      archiveBtn.addEventListener('click', archive);

      function deleteArticle() {
         article.remove();
      }

      function archive() {
         deleteArticle();
         genElement('li', archiveSection, titleValue);

         Array.from(archiveSection.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(t => archiveSection.appendChild(t));
      }
   }
   function genElement(type, parent, textContent) {
      let element = document.createElement(type);
      if (textContent) {
         element.textContent = textContent;
      }
      parent.appendChild(element);
      return element;
   }
}