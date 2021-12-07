const initPopup = require("./init-popup");

function sendFormBasket() {
    const basketForm = document.querySelector('#form-basket');
    function formSubmit(e) {
        e.preventDefault();
        const inputUserName = basketForm.querySelector('input[name="user_name"]');
        const inputPhone = basketForm.querySelector('input[name="phone"]');
        const inputEmail = basketForm.querySelector('input[name="email"]');
        const inputAdress = basketForm.querySelector('input[name="delivery-adress"]');
        const comment = basketForm.querySelector('#basket-form-textarea');
        const submitBtn = basketForm.querySelector('button[type="submit"]');
        const basket = document.querySelector('.js-basket');
        const basketBtn = document.querySelector('.js-basket-btn');
        const counter = document.querySelector('.js-add-to-basket-btns');

        submitBtn.setAttribute('disabled', true);
        fetch('./send-to-mail.php', {
            method: 'POST',
            body: JSON.stringify({
                user_name: inputUserName.value,
                email: inputEmail.value,
                comment: comment.value,
                list: window.BASKET,
                phone: inputPhone.value,
                adress: inputAdress.value
                
            })
        }).then(res => {
            console.log(res);
            if (res.status !== 200) {
                initPopup('Помилка, повідомлення не відправлено!', './img/error.jpg');
                submitBtn.removeAttribute('disabled');
            } else {
                res.text().then(msg => {
                    window.BASKET = [];
                    initPopup('Повідомлення успішно відправлено!', './img/ok.jpg');
                    localStorage.setItem('basket', JSON.stringify(window.BASKET));
                    basket.classList.remove('is-shown');
                    basketBtn.style.transform = 'translate(-50%, 0)';
                    window.BASKET_COUNT_ELEMENT.style.display = 'none';
                    counter.classList.remove('is-show-counter');
                    submitBtn.removeAttribute('disabled');
                })
            }
        }).catch(error => {
            submitBtn.removeAttribute('disabled');


            console.log(error);
        })

    }

    basketForm.addEventListener('submit', formSubmit);
}

module.exports = sendFormBasket;