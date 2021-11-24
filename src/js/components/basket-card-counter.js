function basketCardCounter() {
    const counter = document.querySelector('.js-basket-card');
    if (counter) {
        const counterBtns = counter.querySelectorAll('.basket-cards__button');
        const counterValue = counter.querySelector('.basket-cards__input');
        const minusButton = counter.querySelector('.js-delete-button');

        counterBtns.forEach(btn => {
            if (btn.getAttribute('data') === '+') {
                btn.addEventListener('click', () => {
                    counterValue.value = +counterValue.value + 1;
                    if (minusButton.disabled) {
                        minusButton.disabled = false;
                    }
                })
            } else {
                btn.addEventListener('click', () => {
                    if (+counterValue.value === 1) {
                        minusButton.disabled = true;
                    } else {
                        minusButton.disabled = false;
                    }
                    counterValue.value = +counterValue.value - 1;
                })
            }           
        })
    }
}


module.exports = basketCardCounter;