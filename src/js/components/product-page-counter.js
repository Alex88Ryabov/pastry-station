function productPageCounter() {
    const counter = document.querySelector('.js-counter');
    if (counter) {
        const counterBtns = counter.querySelectorAll('.counter__button');
        const counterValue = counter.querySelector('.counter__input');
        const minusButton = counter.querySelector('.counter__button--minus');

        counterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const isAdd = e.target.getAttribute('data') === '+';
                let quantity = +counterValue.value;
                if (isAdd) {
                    quantity += 1;
                } else {
                    quantity -= 1;
                }               
                if (quantity === 0) {
                    minusButton.disabled = true;       
                } else {
                    minusButton.disabled = false;
                }
                counterValue.value = quantity;
            })
        })
    }
}


module.exports = productPageCounter;