function basketProductsTotalPrice() {
    const basketTotalAmount = document.querySelector('.js-total-amount');
    const basketCardsTotalQuantity = document.querySelector('.basket__quantity');
    let quantityAmount = 0;
    let priceAmount = 0;
    window.BASKET.forEach(product => {
        priceAmount += +product.price * +product.quantity;
        quantityAmount += product.quantity;
    })
    if (window.BASKET.length) {
        basketTotalAmount.innerText = `Всього: ${priceAmount} ₴`;
        basketCardsTotalQuantity.innerText = `Ваші покупки: ${quantityAmount} штук`;
    } else {
        document.querySelector('.js-basket').classList.remove('is-shown');
        document.querySelector('.js-basket-btn').style.transform = 'translate(-50%, 0)'; // добавить селектор
    }
}

module.exports = basketProductsTotalPrice;