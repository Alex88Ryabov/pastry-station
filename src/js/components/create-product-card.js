import environment from "../helpers/environment";

function createProductCards(products, category) {
    const productsTemplate = document.querySelector('.template-product-card');
    const fragment = document.createDocumentFragment();
    products.forEach(product => {
        const productItem = productsTemplate.content.cloneNode(true);
        productItem.querySelector('li').className = `product`;
        productItem.querySelector('a').href = `product-page.html?id=${product.id}`;
        productItem.querySelector('.js-product__img').src = `${environment.apiUrl}/${product.imageSrc}`;
        productItem.querySelector('.js-product__img').alt = product.name;
        productItem.querySelector('.js-product__type').textContent = category.name;
        productItem.querySelector('.js-product__icon').src = `${environment.apiUrl}/${category.imageSrc}`;
        productItem.querySelector('.js-product__icon').alt = category.name;
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
