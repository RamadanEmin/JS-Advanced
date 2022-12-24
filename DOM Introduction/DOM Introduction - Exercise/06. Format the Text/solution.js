function solve() {
  const input = document.getElementById('input').value;
  const sentences = input.split('.').filter(s => s !== '');
  const result = document.getElementById('output');
  while (sentences.length) {
    const text = sentences.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    result.appendChild(p);
  }
}