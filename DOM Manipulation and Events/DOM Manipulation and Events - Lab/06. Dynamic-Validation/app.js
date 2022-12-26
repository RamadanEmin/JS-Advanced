function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
    document.getElementById('email').addEventListener('change', onChange);
    function onChange(e) {
        const email = e.target.value;
        if (pattern.test(email)) {
            e.target.className = '';
        } else {
            e.target.className = 'error';
        }
    };
}