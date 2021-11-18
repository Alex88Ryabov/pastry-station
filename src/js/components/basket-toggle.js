function basketToggle() {
    const footer = document.querySelector('.footer');
    const basket = footer.querySelector('.js-basket');
    const basketBtn = footer.querySelector('.js-basket-btn');
    const closeBasket = footer.querySelector('.js-basket-close');


    const openBasket = () => {
        basket.classList.add('is-shown');
    };

    const basketClose = () => {
        basket.classList.remove('is-shown');
    };




    basketBtn.addEventListener('click', openBasket);

    closeBasket.addEventListener('click', basketClose);
};

module.exports = basketToggle;