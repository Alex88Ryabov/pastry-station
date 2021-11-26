function basketProductCard() {
    const cardsContainer = document.querySelector('.js-basket-cards');
    const basketCards = cardsContainer.querySelectorAll('.js-basket-card');

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



