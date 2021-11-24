function basketProductCard() {
    const cardsContainer = document.querySelector('.js-basket-cards');
    const basketCards = cardsContainer.querySelectorAll('.js-basket-card');
    const basketButton = cardsContainer.querySelectorAll('.basket-cards__button');
    const addButton = cardsContainer.querySelector('.js-add-button');
    const deleteButton = cardsContainer.querySelector('.js-delete-button');

    basketCards.forEach(card => {
        card.querySelector('.basket-cards__item').addEventListener('click', (e) => {
            const currentCard = e.target.parentElement
            currentCard.classList.toggle('is-show');
            basketCards.forEach(c => {
                if (c !== currentCard) {
                    c.classList.remove('is-show');
                }
            })

        })
    })

}

module.exports = basketProductCard;



