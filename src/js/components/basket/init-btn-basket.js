import createBasketCards from "./create-basket-cards";
import basketCardCounter from "./basket-card-counter";

function initBtnBasket() {
    const footer = document.querySelector('.footer');
    const basket = footer.querySelector('.js-basket');
    const basketBtn = footer.querySelector('.js-basket-btn');
    const closeBasket = footer.querySelector('.js-basket-close');

    const basketCardsWrap = document.querySelector('.js-basket-cards-wrap');

    const openBasket = () => {
        const basketCards = createBasketCards();
        basketCardsWrap.innerHTML = '';
        basketCardsWrap.appendChild(basketCards);
        basket.classList.add('is-shown'); 
        basketCardCounter();
        
    };

    const basketClose = () => {
        basket.classList.remove('is-shown');
    };

    basketBtn.addEventListener('click', openBasket);
    closeBasket.addEventListener('click', basketClose);
};

module.exports = initBtnBasket;