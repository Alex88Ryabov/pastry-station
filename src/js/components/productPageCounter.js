function productPageCounter() {
    const counter = document.querySelector('.js-counter');
    const counterBtns = counter.querySelectorAll('button');
    const counterValue = counter.querySelector('input');

    counterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isAdd = e.target.getAttribute('data') === '+';
            let quantity = +counterValue.value;
            if (isAdd) {
                quantity += 1;
            } else {
                quantity -= 1;
            }
            counterValue.value = quantity;
        })
    })
}

module.exports = productPageCounter;