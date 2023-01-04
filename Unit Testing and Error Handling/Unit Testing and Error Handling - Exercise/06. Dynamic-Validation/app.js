function validate() {
    const inpuEl = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    inpuEl.addEventListener('change', () => {
        if (pattern.test(inpuEl.value)) {
            inpuEl.classList.remove('error');
        } else {
            inpuEl.classList.add('error');
        }
    });
}