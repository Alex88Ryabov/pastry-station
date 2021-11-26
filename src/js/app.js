import './helpers/util'
import initBurger from './components/init-burger';
import initCounter from './components/init-counters';
import initProductPage from "./pages/product-page/init-product-page";
import initHomePage from "./pages/home-page/init-home-page";
import initBasket from "./components/basket/init-basket";
import basketProductCard from "./components/basket-product-card";
import basketProductsTotalPrice from "./components/basket/basket-products-total-price";

basketProductCard();

initBasket();
initBurger();
initCounter();
basketProductsTotalPrice();

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  initHomePage()
} else if (window.location.pathname === '/product-page.html') {
  initProductPage();
}









