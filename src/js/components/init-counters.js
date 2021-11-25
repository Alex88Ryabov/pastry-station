function initCounter() {
    const counter = document.querySelector('.js-counter');
    if (counter) {
        const counterBtns = counter.querySelectorAll('.counter__button');
        const counterValue = counter.querySelector('.counter__input');

        counterBtns.forEach(btn => {
            if (btn.getAttribute('data') === '+') {
                btn.addEventListener('click', () => {
                    counterValue.value = +counterValue.value + 1;
                    const changeEvent = new Event('change');
                    counterValue.dispatchEvent(changeEvent);
                })
            } else {
                btn.addEventListener('click', () => {
                    counterValue.value = +counterValue.value - 1;
                    const changeEvent = new Event('change');
                    counterValue.dispatchEvent(changeEvent);
                })
            }
        })
    }
}

module.exports = initCounter;