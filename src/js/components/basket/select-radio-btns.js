function selectRadioBtns() {
    const deliveryBtn = document.querySelector('.js-delivery-btn');
    const deliveryWrap = document.querySelector('.js-delivery-wrap')
    const takeMyselfBtn = document.querySelector('.js-take-myself-btn');
    const ourAdress = document.querySelector('.js-adress');
    const deliveryInput = document.querySelector('.js-delivery-input')

    const deliveryWrapIsShown = () => {
        deliveryWrap.style.display = 'block';
        ourAdress.style.display = 'none';
        deliveryInput.setAttribute('required', 'required');
    }

    const ourAdressIsShown = () => {
        ourAdress.style.display = 'block';
        deliveryWrap.style.display = 'none';
        deliveryInput.removeAttribute('required');
    }

    deliveryBtn.addEventListener('change', deliveryWrapIsShown);
    takeMyselfBtn.addEventListener('change', ourAdressIsShown);

}

module.exports = selectRadioBtns;