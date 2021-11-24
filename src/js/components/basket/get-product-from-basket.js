function getProductFromBasket(productId) {
    return window.BASKET.find(p => p.id === productId);
}

module.exports = getProductFromBasket;