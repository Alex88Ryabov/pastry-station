function productPageAddProductCardData() {
    const queryParams = window.location.search.slice(window.location.search.indexOf('?') + 1).split('&').reduce((acc, query) => {
        const parts = query.split('=');
        acc[parts[0]] = parts[1] ? decodeURIComponent(parts[1]) : parts[1];
        return acc;
    }, {});
    fetch('/data/products.json')
        .then(responce => {
            responce.json().then(res => {
                const product = res.find(p => p.id === +queryParams.id);
                const productsTemplate = document.querySelector('.template-info');
                const productImg = document.querySelector('.js-product-img');
                const productIcon = document.querySelector('.js-product-icon');
                const productTitle = document.querySelector('.js-product-title');
                const productPrice = document.querySelector('.js-product-price');
                const productType = document.querySelector('.js-product-type');
                const productDescription = document.querySelector('.js-product-descr');
                const productInfo = document.querySelector('.js-product-info');
                
                productImg.setAttribute('src', product.imgUrl);
                productIcon.setAttribute('src', product.icon);
                productTitle.innerText = product.title;
                productType.innerText = product.type;
                productPrice.innerText = product.price;
                productDescription.innerText = product.description;
                product.info.forEach(item => {
                    const productItem = productsTemplate.content.cloneNode(true);
                    productItem.querySelector('p').className = 'product-page__row';
                    productItem.querySelector('b').className = 'product-page__row-title';
                    productItem.querySelector('b').innerText = item.title;
                    productItem.querySelector('span').innerText = item.text;
                    productInfo.appendChild(productItem);
                })


            })
        })
};

module.exports = productPageAddProductCardData;