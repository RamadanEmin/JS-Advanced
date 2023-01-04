function notify(message) {
  const divEl = document.getElementById('notification');
  divEl.textContent = message;
  divEl.style.display = 'block';
  // setTimeout(() => {
  //   divEl.style.display = 'none';
  // }, 2500);
  divEl.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
}