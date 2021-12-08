import './helpers/util';
import initCounter from './components/init-counters';
import initProductPage from "./pages/product-page/init-product-page";
import initHomePage from "./pages/home-page/init-home-page";
import initBasket from "./components/basket/init-basket";
import basketProductCard from "./components/basket-product-card";
import sendFormBasket from './components/send-form-basket';

const doc = document.documentElement;

basketProductCard();

initBasket();
initCounter();
sendFormBasket();
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  initHomePage();
  doc.style.setProperty('--body-bg', '#f4f4f4')
} else if (window.location.pathname === '/product-page.html') {
  initProductPage();
  doc.style.setProperty('--body-bg', '#ffffff')
}

doc.style.setProperty('--app-height', `${window.innerHeight}px`);
window.screen.orientation.lock("portrait");

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  








