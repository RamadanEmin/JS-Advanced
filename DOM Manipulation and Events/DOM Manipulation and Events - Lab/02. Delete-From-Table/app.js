function deleteByEmail() {
    const emailInputElement = document.querySelector('input[name=email]');
    const emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    const resultElement = document.getElementById('result');
    const emailElements = Array.from(emailCellElements);
    let targetElement = emailElements.find(el => el.textContent === emailInputElement.value);
    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    emailInputElement.value = '';
}