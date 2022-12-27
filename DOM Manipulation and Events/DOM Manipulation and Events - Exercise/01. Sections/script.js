function create(words = []) {
   const content = document.getElementById('content');
   words.forEach(word => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      content.appendChild(divElement);
      divElement.addEventListener('click', (e) => e.target.children[0].style.display = '');
   });
}
