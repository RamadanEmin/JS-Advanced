function solve() {
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let currentStep = 0;
  const result = document.querySelector('.results-inner h1');
  const quizzie = document.getElementById('quizzie');
  quizzie.addEventListener('click', onClick);
  function onClick(e) {
    if (e.target.className === 'answer-text') {
      quizzie.children[currentStep + 1].style.display = 'none';
      if (correctAnswers.includes(e.target.textContent)) {
        userAnswers++;
      }
      currentStep++;
      quizzie.children[currentStep + 1].style.display = 'block';
      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', onClick);
        result.textContent = correctAnswers.length === userAnswers
          ? "You are recognized as top JavaScript fan!"
          : `You have ${(userAnswers)} right answers`;
      }
    }
  }
}
