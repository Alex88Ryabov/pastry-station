import initBtnBasket from "./init-btn-basket";

function initBasket() {
    window.BASKET = JSON.parse(localStorage.getItem('basket'));
    window.BASKET_COUNT_ELEMENT = document.querySelector('.js-basket-count')
    if (!window.BASKET) {
        window.BASKET = [];
        window.BASKET_COUNT_ELEMENT.style.display = 'none';
    } else {
        let basketCount = 0;
        window.BASKET.forEach(product => {
            basketCount += product.quantity;
        })
        if (window.BASKET.length) {
            window.BASKET_COUNT_ELEMENT.innerText = basketCount;
        } else {
            window.BASKET_COUNT_ELEMENT.style.display = 'none';
        }
    }
    initBtnBasket();
}

module.exports = initBasket;