import './helpers/util'
import initBurger from './components/init-burger';
import initBtnBasket from './components/init-btn-basket';
import initCounter from './components/init-counters';
import initProductPage from "./pages/product-page/init-product-page";
import initHomePage from "./pages/home-page/init-home-page";
import initBasket from "./components/init-basket";
import basketProductCard from './components/basket-product-card';

basketProductCard();

initBasket();
initBurger();
initBtnBasket();

initCounter();

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  initHomePage()
} else if (window.location.pathname === '/product-page.html') {
  initProductPage();
}









