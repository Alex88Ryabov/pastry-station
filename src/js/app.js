import JsTabs from 'js-tabs';
import burgerToggle from './components/burger-toggle';
import basketToggle from './components/basket-toggle';
import productCardAddData from './components/product-card-add-data';
import productPageAddProductCardData from './components/product-page-add-product-card-data';
import productPageCounter from './components/product-page-counter';

burgerToggle();
basketToggle();
if (window.location.pathname === '/product-page.html') {
  productPageAddProductCardData();
}
productPageCounter();


if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  fetch('/data/categories.json')
    .then(response => {
      response.json().then(res => {
        const categories = res;
        const tabTitleTemplate = document.querySelector('.template-tab-title');
        const tabContentTemplate = document.querySelector('.template-tab-content');
        const tabTitles = document.querySelector('.js-tabs-head');
        const tabContents = document.querySelector('.js-tabs-content');

        categories.forEach((category, i) => {
          const tabTitle = tabTitleTemplate.content.cloneNode(true);
          const tabContent = tabContentTemplate.content.cloneNode(true);

          if (i === 0) {
            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab active`;
            tabContent.querySelector('li').className = 'js-tabs__content active'
            productCardAddData(tabContent.querySelector('li'), category.id);
          } else {
            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab`;
            tabContent.querySelector('li').className = 'js-tabs__content';
            productCardAddData(tabContent.querySelector('li'), category.id);
          }

          tabTitle.querySelector('img').src = category.imageUrl;
          tabTitle.querySelector('.js-tab-title').textContent = category.name;

          tabTitles.appendChild(tabTitle);
          tabContents.appendChild(tabContent)
        });

        const myTabs = new JsTabs({
          elm: '#my-js-tabs'
        })
        myTabs.init();
      })
    })
    .catch(error => {
      console.log(error);
    });
}
// const tabTitles = document.querySelectorAll('.js-tabs__tab')

// tabTitles.forEach(tabTitle => {
//   tabTitle.addEventListener('click', (e) => {
//     console.log(e.taget);
//   })
// })





