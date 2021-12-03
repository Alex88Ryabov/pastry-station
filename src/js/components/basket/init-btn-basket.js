import createBasketCards from "./create-basket-cards";
import basketCardCounter from "./basket-card-counter";
import basketProductsTotalPrice from "./basket-products-total-price";
import initPopup from "../init-popup";


function initBtnBasket() {
    const footer = document.querySelector('.footer');
    const basket = footer.querySelector('.js-basket');
    const basketBtn = footer.querySelector('.js-basket-btn');
    const closeBasket = footer.querySelector('.js-basket-close');
    const basketCardsWrap = document.querySelector('.js-basket-cards-wrap');
    const overlay = document.querySelector('.js-basket-overlay');

    const openBasket = () => {
        const basketCards = createBasketCards();
        basketCardsWrap.innerHTML = '';
        basketCardsWrap.appendChild(basketCards);
        basket.classList.add('is-shown');
        basketBtn.style.transform = 'translate(-50%, 140%)';
        basketProductsTotalPrice();
        basketCardCounter();
        if(window.BASKET.length === 0) {
            initPopup('Ваш кошик порожній!', './img/empty-basket.jpg');
            basket.style.display = 'none';
        } if (window.BASKET.length >= 1) {
            basket.style.display = 'block';
        }
        
    };
    
    const basketClose = () => {
        basket.classList.remove('is-shown');
        basketBtn.style.transform = 'translate(-50%, 0)';
    };
    basketBtn.addEventListener('click', openBasket);
    overlay.addEventListener('click', basketClose);
    closeBasket.addEventListener('click', basketClose);
    
};

module.exports = initBtnBasket;