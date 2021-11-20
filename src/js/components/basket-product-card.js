function basketProductCard () {
const cardsContainer = document.querySelector('.js-basket-cards');
const basketCards = cardsContainer.querySelectorAll('.js-basket-card');
const basketButton = cardsContainer.querySelectorAll('.basket-cards__button');
const addButton = cardsContainer.querySelector('.js-add-button');
const deleteButton = cardsContainer.querySelector('.js-delete-button');

basketCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const currentCard = e.target.parentElement
        currentCard.classList.toggle('is-show');
        basketCards.forEach(c => {
            if (c !== currentCard) {
                c.classList.remove('is-show');
            }
        })
        // card.classList.toggle('is-show');
    })
})
    // button.addEventListener('click', () => {
    //     basketCard.classList.add('is-show');
    //     if ( basketCard.classList.contains('is-show')) {
    //         button.classList.add('z-index');
    //         addButton.setAttribute('style', 'transform: translateY(0)');
    //         deleteButton.setAttribute('style', 'transform: translateY(0)');
    //         basketButton.forEach(basketBtn => {
    //             basketBtn.classList.add('button-active');
    //         });
    //     }
    // })





}

module.exports = basketProductCard;




//  <div class="basket-cards js-basket-cards">
//     <ul class="basket-cards__list">
//         <li class="basket-cards__card js-basket-card">
//             <button class="basket-cards__item js-basket-card-button">
//                 <p class="basket-cards__number">1 {{ mixins.icon('close-button') }}</p>
//                 <p class="basket-cards__name">Продукт 1</p>
//                 <span class="basket-cards__price">60 ₴</span>
//             </button>
//             <button tabindex="0" class="basket-cards__button basket-cards__button--add js-add-button">
//                 <span>{{ mixins.icon('small-plus') }}</span>
//                 <p class="basket-cards__action">Добавить</p>
//             </button>
//             <button tabindex="0" class="basket-cards__button basket-cards__button--delete js-delete-button">
//                 <span>{{ mixins.icon('minus') }}</span>
//                 <p class="basket-cards__action">Удалить</p>
//             </button>
//         </li>
//     </ul>
// </div> 