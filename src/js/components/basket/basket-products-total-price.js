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
        basketTotalAmount.innerText = `${priceAmount} ₴`;
        basketCardsTotalQuantity.innerText = quantityAmount;
    }
}

module.exports = basketProductsTotalPrice;