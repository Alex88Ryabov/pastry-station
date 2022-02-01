import basketCardCounter from "./basket-card-counter";
import getBasketProductsLength from "./get-basket-products-length";
import getProductFromBasket from "./get-product-from-basket";
import basketProductsTotalPrice from "./basket-products-total-price";


function createBasketCards() {

    const basket = window.BASKET;
    const cardTemplate = document.querySelector('.template-basket-product-card');
    const fragment = document.createDocumentFragment();
    const basketCardsWrap = document.querySelector('.js-basket-cards-wrap');
    const btnsWrap = document.querySelector('.js-add-to-basket-btns');

    basket.forEach(product => {
        const productItem = cardTemplate.content.cloneNode(true);
        const counterInput = productItem.querySelector('input');

        productItem.querySelector('.basket-cards__input').value = product.quantity;
        productItem.querySelector('.basket-cards__name').innerText = product.name;
        if (product.unit) {
            productItem.querySelector('.basket-cards__price').innerText = `${product.price} ₴ / ${product.unit}`;
        } else {
            productItem.querySelector('.basket-cards__price').innerText = `${product.price} ₴`;
        }
        productItem.querySelector('.basket-cards__item').addEventListener('click', function (e) {
            const currentCard = this.parentElement
            const basketCards = document.querySelectorAll('.js-basket-card');

            currentCard.classList.toggle('is-show');
            basketCards.forEach(c => {
                if (c !== currentCard) {
                    c.classList.remove('is-show');
                }
            })

        })
        counterInput.addEventListener('change', (e) => {
            if (!+e.target.value) {
                const indexCandidateToRemove = window.BASKET.findIndex(p => p.id === product.id);
                const queryParams = window.util.getQueryParams(window.location.search)
                window.BASKET.splice(indexCandidateToRemove, 1);
                localStorage.setItem('basket', JSON.stringify(window.BASKET));
                const basketCards = createBasketCards();
                basketCardsWrap.innerHTML = '';
                basketCardsWrap.appendChild(basketCards);
                basketCardCounter();
                window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();

                if (+queryParams.id === product.id) {
                    btnsWrap.classList.remove('is-show-counter');
                }

                if (!window.BASKET.length) {
                    window.BASKET_COUNT_ELEMENT.style.display = 'none';
                    basketProductsTotalPrice();

                }

            } else {
                const candidate = getProductFromBasket(product.id);
                candidate.quantity = +e.target.value;
                window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();
                localStorage.setItem('basket', JSON.stringify(window.BASKET));
                btnsWrap.querySelector('input').value = e.target.value;
                basketProductsTotalPrice();
            }
        })

        fragment.appendChild(productItem);
    });

    return fragment;
}

module.exports = createBasketCards;
