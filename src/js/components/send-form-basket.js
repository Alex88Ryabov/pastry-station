function sendFormBasket() {
    const basketForm = document.querySelector('#form-basket');
    function formSubmit(e) {
        e.preventDefault();
        const inputUserName = basketForm.querySelector('input[name="user_name"]');
        const inputPhone = basketForm.querySelector('input[name="phone"]');
        const inputEmail = basketForm.querySelector('input[name="email"]');
        const comment = basketForm.querySelector('#basket-form-textarea');
        const submitBtn = basketForm.querySelector('button[type="submit"]');
        submitBtn.setAttribute('disabled', true);
        fetch('./send-to-mail.php', {
            method: 'POST',
            body: JSON.stringify({
                user_name: inputUserName.value,
                email: inputEmail.value,
                comment: comment.value,
                list: window.BASKET,
                phone: inputPhone.value
            })
        }).then(res => {
            console.log(res);
            if (res.status !== 200) {
                submitBtn.setAttribute('disabled', false);
                alert('все не гуд');
            } else {
                res.text().then(msg => {
                    submitBtn.setAttribute('disabled', false);
                    alert('все гуд');
                    
                    window.BASKET = [];
                })
            }
        }).catch(error => {
            submitBtn.setAttribute('disabled', false);

            console.log(error);
        })
    }

    basketForm.addEventListener('submit', formSubmit);

}

module.exports = sendFormBasket;