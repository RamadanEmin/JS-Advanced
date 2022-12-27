function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', onClick));
    function onClick(e) {
        const button = e.target;
        const profile = button.parentNode;
        const hiddenInfo = profile.querySelector('div');
        if (profile.querySelector('input[value="unlock"]').checked) {
            if (button.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}