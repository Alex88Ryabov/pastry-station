function createBasketCards() {

    const basket = window.BASKET;
    const cardTemplate = document.querySelector('.template-basket-product-card');
    const fragment = document.createDocumentFragment();

    basket.forEach(product => {
        const productItem = cardTemplate.content.cloneNode(true);

        productItem.querySelector('.basket-cards__input').value = product.quantity;
        productItem.querySelector('.basket-cards__name').innerText = product.name;
        productItem.querySelector('.basket-cards__price').innerText = product.price;

        productItem.querySelector('.basket-cards__item').addEventListener('click', (e) => {
            const currentCard = e.target.parentElement
            const basketCards = document.querySelectorAll('.js-basket-card');


            currentCard.classList.toggle('is-show');
            basketCards.forEach(c => {
                if (c !== currentCard) {
                    c.classList.remove('is-show');
                }
            })

        })


        fragment.appendChild(productItem);
    });

    return fragment;
}

module.exports = createBasketCards;