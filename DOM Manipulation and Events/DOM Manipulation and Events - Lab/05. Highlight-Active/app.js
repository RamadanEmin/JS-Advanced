function focused() {
    Array.from(document.getElementsByTagName('input')).forEach(el => {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    });
    function onFocus(e) {
        e.target.parentNode.className = 'focused';
    };
    function onBlur(e) {
        e.target.parentNode.className = '';
    }
}