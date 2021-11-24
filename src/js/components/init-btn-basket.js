import createBasketCards from "./basket/create-basket-cards";

function initBtnBasket() {
    const footer = document.querySelector('.footer');
    const basket = footer.querySelector('.js-basket');
    const basketBtn = footer.querySelector('.js-basket-btn');
    const closeBasket = footer.querySelector('.js-basket-close');
    const basketCards = createBasketCards();
    const basketCardsWrap = document.querySelector('.js-basket-cards-wrap');
    console.log(basketCardsWrap);
    const openBasket = () => {
        basketCardsWrap.appendChild(basketCards);
        basket.classList.add('is-shown');
    };

    const basketClose = () => {
        basket.classList.remove('is-shown');
    };




    basketBtn.addEventListener('click', openBasket);

    closeBasket.addEventListener('click', basketClose);
};

module.exports = initBtnBasket;