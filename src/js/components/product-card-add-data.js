function createProducts(products, tabContent) {
    const productsTemplate = document.querySelector('.template-product-card');

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
        productItem.querySelector('.js-product__price').textContent = product.price;

        tabContent.appendChild(productItem);
    });
}

function productCardAddData(tabContent, parentId) {

    fetch('/data/products.json')
        .then(response => {
            response.json().then(res => {
                const products = res.filter(product => product.parentId === parentId);
                createProducts(products, tabContent)
            })
        })
        .catch(error => {
            console.log(error);
        })

};

module.exports = productCardAddData;

