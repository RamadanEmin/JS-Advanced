function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let matches = 0;
   for (let town of townsElements) {
      if (town.textContent.includes(userWord) && userWord !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${matches} matches found`;
}