import getBasketProductsLength from "../../components/basket/get-basket-products-length";
import getProductFromBasket from "../../components/basket/get-product-from-basket";
import iconAnimation from "./icon-animation";
import basketIconAnimation from "./basket-icon-animation";
import environment from "../../helpers/environment";
import 'slick-carousel';



function createProductPage(product, category) {
  const productsTemplate = document.querySelector('.template-info');
  const productsSliderTemplate = document.querySelector('.template-slider');
  const productsSlideTemplate = document.querySelector('.template-slide');
  const productsOneImageTemplate = document.querySelector('.template-image');
  const productSliderWrap = document.querySelector('.js-product-page__slider');
  const productCard = document.querySelector('.js-product-page__card');
  const productIcon = document.querySelector('.js-product-icon img');
  const productTitle = document.querySelector('.js-product-title');
  const productPrice = document.querySelector('.js-product-price');
  const productDescription = document.querySelector('.js-product-description');
  const productInfo = document.querySelector('.js-product-info');
  const btnsWrap = document.querySelector('.js-add-to-basket-btns');
  const btnAddProductToBasket = document.querySelector('.js-add-product-to-basket');
  const counter = document.querySelector('.js-counter-wrap');
  const counterInput = counter.querySelector('input');
  if (product.imageSrc.length <= 1) {
    const productOneImage = productsOneImageTemplate.content.cloneNode(true);
    productOneImage.querySelector('img').setAttribute('src', `${environment.apiUrl}/${product.imageSrc[0]}`);
    productOneImage.querySelector('p').innerText = category.name;
    productCard.appendChild(productOneImage);
  } else {
    const productSlider = productsSliderTemplate.content.cloneNode(true);
    product.imageSrc.forEach(src => {
      const productSlide = productsSlideTemplate.content.cloneNode(true);
      productSlide.querySelector('img').setAttribute('src', `${environment.apiUrl}/${src}`);
      productSlider.querySelector('.js-slider').appendChild(productSlide);
    })
    productSlider.querySelector('p').innerText = category.name;
    productSliderWrap.appendChild(productSlider);
    $('.js-slider').slick({
      autoplay: false,
      adaptiveHeight: true,
      arrows: false,
      dots: true,
      customPaging(slider, i) {
        return '<a href="#"><div class="slide-dot"></div><div class="slide-dot-active"></div></a>';
      },
    });
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
  productIcon.setAttribute('src', `${environment.apiUrl}/${category.imageSrc}`);
  productTitle.innerText = product.name;
  if (product.unit) {
    productPrice.innerText = `${product.price} ₴ / ${product.unit}`;
  } else {
    productPrice.innerText = `${product.price} ₴`;
  }

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
        name: product.name,
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
    basketIconAnimation();
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
        basketIconAnimation();
      }

      localStorage.setItem('basket', JSON.stringify(window.BASKET));
      window.BASKET_COUNT_ELEMENT.innerText = getBasketProductsLength();
    }
  })
}

module.exports = createProductPage;
