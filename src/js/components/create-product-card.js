function createProductCards(products, category) {
    const productsTemplate = document.querySelector('.template-product-card');
    const fragment = document.createDocumentFragment();
    products.forEach(product => {
        const productItem = productsTemplate.content.cloneNode(true);
        productItem.querySelector('li').className = `product`;
        productItem.querySelector('a').href = `product-page.html?id=${product.id}`;
        productItem.querySelector('.js-product__img').src = product.imageFile;
        productItem.querySelector('.js-product__img').alt = product.imageName;
        productItem.querySelector('.js-product__type').textContent = category.name;
        productItem.querySelector('.js-product__icon').src = category.imageFile;
        productItem.querySelector('.js-product__icon').alt = category.imageName;
        productItem.querySelector('h4').textContent = product.name;
        if (product.unit) {
            productItem.querySelector('.js-product__price').innerText = `${product.price} ₴ / ${product.unit}`;
        } else {
            productItem.querySelector('.js-product__price').innerText = `${product.price} ₴`;
        }
        fragment.appendChild(productItem);
    });

    return fragment;
}

module.exports = createProductCards;
