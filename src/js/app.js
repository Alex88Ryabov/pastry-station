// import sayHello from './lib/sayHello';

// sayHello();
import JsTabs from 'js-tabs';
import burgerToggle from './components/burgerToggle';


burgerToggle();


fetch('/data/categories.json')
  .then(response => {
    response.json().then(res => {
      const categories = res;
      const categoryTabsTemplate = document.querySelector('.template-category-tab-head');
      const categoriesTabsHead = document.querySelector('.js-categories-tabs-head');

      categories.forEach(category => {
        const categoryTabsItem = categoryTabsTemplate.content.cloneNode(true);

        categoryTabsItem.querySelector('li').className = `tabs__tab js-tabs__tab ${category.class}`;
        categoryTabsItem.querySelector('img').src = category.imageUrl;
        categoryTabsItem.querySelector('.js-tab-title').textContent = category.name;
        categoriesTabsHead.appendChild(categoryTabsItem);
      });

      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const myTabs = new JsTabs({
          elm: '#my-js-tabs'
        })
        myTabs.init();
      };

    })
  })
  .catch(error => {
    console.log(error);
  });

fetch('/data/products.json')
  .then(response => {
    response.json().then(res => {
      console.log(res);
    })
  })
  .catch(error => {
    console.log(error);
  })




