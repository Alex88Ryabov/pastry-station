function getBasketProductsLength() {

    let productBasketLength = 0;

    window.BASKET.forEach(p => {
        productBasketLength += p.quantity;
    })
    return productBasketLength;
}

module.exports = getBasketProductsLength;