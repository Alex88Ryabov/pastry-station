function basketCardCounter() {
    const cardsWrap = document.querySelector('.js-basket-cards-wrap');
    const basketCards = cardsWrap.querySelectorAll('.js-basket-card');
    basketCards.forEach(card => {
        if (card) {
            const counterBtns = card.querySelectorAll('.basket-cards__button');
            const counterValue = card.querySelector('.basket-cards__input');

            counterBtns.forEach(btn => {
                if (btn.getAttribute('data') === '+') {
                    btn.addEventListener('click', () => {
                        counterValue.value = +counterValue.value + 1;
                        const changeEvent = new Event('change');
                        counterValue.dispatchEvent(changeEvent);
                    })
                } else {
                    btn.addEventListener('click', () => {
                        counterValue.value = +counterValue.value - 1
                        const changeEvent = new Event('change');
                        counterValue.dispatchEvent(changeEvent);
                        console.log(counterValue.value);
                        
                    })
                }
            })
        }
    })



}



module.exports = basketCardCounter;