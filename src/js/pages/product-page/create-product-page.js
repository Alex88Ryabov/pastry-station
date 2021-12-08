import getBasketProductsLength from "../../components/basket/get-basket-products-length";
import getProductFromBasket from "../../components/basket/get-product-from-basket";
import iconAnimation from "./icon-animation"

function createProductPage(products) {
    const queryParams = window.util.getQueryParams(window.location.search);
    const product = products.find(p => p.id === +queryParams.id);
    const productsTemplate = document.querySelector('.template-info');
    const productImg = document.querySelector('.js-product-img');
    const productIcon = document.querySelector('.js-product-icon img');
    const productTitle = document.querySelector('.js-product-title');
    const productPrice = document.querySelector('.js-product-price');
    const productType = document.querySelector('.js-product-type');
    const productDescription = document.querySelector('.js-product-descr');
    const productInfo = document.querySelector('.js-product-info');
    const btnsWrap = document.querySelector('.js-add-to-basket-btns');
    const btnAddProductToBasket = document.querySelector('.js-add-product-to-basket');
    const counter = document.querySelector('.js-counter-wrap');
    const counterInput = counter.querySelector('input');



    productImg.setAttribute('src', product.imgUrl);
    productIcon.setAttribute('src', product.icon);
    productTitle.innerText = product.title;
    productType.innerText = product.type;
    if (product.unit) {
        productPrice.innerText = `${product.price} ₴ / ${product.unit}`;
    } else {
        productPrice.innerText = `${product.price} ₴`;
    }
    productDescription.innerText = product.description;
    product.info.forEach(item => {
        const productItem = productsTemplate.content.cloneNode(true);
        productItem.querySelector('p').className = 'product-page__row';
        productItem.querySelector('b').className = 'product-page__row-title';
        productItem.querySelector('b').innerText = item.title;
        productItem.querySelector('span').innerText = item.text;
        productInfo.appendChild(productItem);
    })

    const candidateFromBasket = getProductFromBasket(product.id)

    if (candidateFromBasket) {
        btnsWrap.classList.add('is-show-counter')
        counterInput.value = candidateFromBasket.quantity;
    }

    btnAddProductToBasket.addEventListener('click', () => {
        const candidate = getProductFromBasket(product.id)

        if (candidate) {
            candidate.quantity += 1;
            localStorage.setItem('basket', JSON.stringify(window.BASKET));
        } else {
            const productBasket = {
                id: product.id,
                name: product.title,
                price: product.price,
                quantity: 1,
            }
            if (product.unit) {
                productBasket.unit = product.unit;
            }
            window.BASKET.push(productBasket);
            localStorage.setItem('basket', JSON.stringify(window.BASKET));
            window.BASKET_COUNT_ELEMENT.style.display = 'flex';
        }
        window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();
        counterInput.value = candidate ? candidate.quantity : 1;
        btnsWrap.classList.add('is-show-counter');
        iconAnimation();
    })


    counterInput.addEventListener('change', (e) => {

        if (!+e.target.value) {
            const indexCandidateToRemove = window.BASKET.findIndex(p => p.id === product.id);

            window.BASKET.splice(indexCandidateToRemove, 1);
            localStorage.setItem('basket', JSON.stringify(window.BASKET));
            window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();
            btnsWrap.classList.remove('is-show-counter')

            if (!window.BASKET.length) {
                window.BASKET_COUNT_ELEMENT.style.display = 'none';
            }
        } else {
            const candidate = getProductFromBasket(product.id)

            if (candidate.quantity > +e.target.value) {
                candidate.quantity -= 1;
            } else {
                candidate.quantity += 1;
                iconAnimation();
            }

            localStorage.setItem('basket', JSON.stringify(window.BASKET));
            window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();
        }
    })
}

module.exports = createProductPage;