function initBurger() {
    const headerIn = document.querySelector('.header__in')
    const burgerBtn = headerIn.querySelector('.js-burger-button')
    const burgerMenu = document.querySelector('.js-burger-menu');
    const closeBtn = burgerMenu.querySelector('.js-burger-close-button');
    


    const openBurger = () => {
        burgerMenu.classList.add('burger-menu--shown');
        
    };

    const closeBurger = () => {
        burgerMenu.classList.remove('burger-menu--shown');

    };




    burgerBtn.addEventListener('click', openBurger);

    closeBtn.addEventListener('click', closeBurger);
};

module.exports = initBurger;
