function createProductCards(products) {
    const productsTemplate = document.querySelector('.template-product-card');
    const fragment = document.createDocumentFragment();
    products.forEach(product => {
        const productItem = productsTemplate.content.cloneNode(true);
        productItem.querySelector('li').className = `product`;
        productItem.querySelector('a').href = `product-page.html?id=${product.id}`;
        productItem.querySelector('.js-product__img').src = product.imgUrl;
        productItem.querySelector('.js-product__img').alt = product.title;
        productItem.querySelector('.js-product__type').textContent = product.type;
        productItem.querySelector('.js-product__icon').src = product.icon;
        productItem.querySelector('.js-product__icon').alt = product.iconName;
        productItem.querySelector('h4').textContent = product.title;
        productItem.querySelector('.js-product__price').textContent = `${product.price} ₴`;
        fragment.appendChild(productItem);
    });

    return fragment;
}

module.exports = createProductCards;