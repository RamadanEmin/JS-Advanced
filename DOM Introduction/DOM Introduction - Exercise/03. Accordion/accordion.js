function toggle() {
    let button = document.querySelector('.button');
    let hiddenText=document.querySelector('#extra');
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        hiddenText.style.display='block';
    } else {
        button.textContent = 'More';
        hiddenText.style.display='none';
    }
}