import createBasketCards from "./create-basket-cards";
import basketCardCounter from "./basket-card-counter";
import basketProductsTotalPrice from "./basket-products-total-price";


function initBtnBasket() {
    const footer = document.querySelector('.footer');
    const basket = footer.querySelector('.js-basket');
    const basketBtn = footer.querySelector('.js-basket-btn');
    const closeBasket = footer.querySelector('.js-basket-close');
    const popup = document.querySelector('.js-popup');
    const basketCardsWrap = document.querySelector('.js-basket-cards-wrap');
    const popupCloseBtn = popup.querySelector('.js-popup-close');
    const openBasket = () => {
        const basketCards = createBasketCards();
        basketCardsWrap.innerHTML = '';
        basketCardsWrap.appendChild(basketCards);
        basket.classList.add('is-shown');
        basketBtn.style.transform = 'translate(-50%, 140%)';
        basketProductsTotalPrice();
        basketCardCounter();
        if(window.BASKET.length === 0) {
            popup.style.display = 'block';
            basket.style.display = 'none';
        } if (window.BASKET.length >= 1) {
            basket.style.display = 'block';
        }
        
    };
    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        basketBtn.style.transform = 'translate(-50%, 0)';
    })
    const basketClose = () => {
        basket.classList.remove('is-shown');
        basketBtn.style.transform = 'translate(-50%, 0)';
        
    };
    basketBtn.addEventListener('click', openBasket);
    closeBasket.addEventListener('click', basketClose);
    
};

module.exports = initBtnBasket;