function initCounter() {
    const counter = document.querySelector('.js-counter');
    if (counter) {
        const counterBtns = counter.querySelectorAll('.counter__button');
        const counterValue = counter.querySelector('.counter__input');
        const minusButton = counter.querySelector('.counter__button--minus');

        counterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const isAdd = e.target.parentElement.getAttribute('data') === '+';


                let quantity = +counterValue.value;
                if (isAdd) {
                    quantity += 1;
                } else {
                    quantity -= 1;
                }
                counterValue.value = quantity;
                // создаем собыбите change на input`e
                const changeEvent = new Event('change');
                counterValue.dispatchEvent(changeEvent);
            })
        })
    }
}

module.exports = initCounter;