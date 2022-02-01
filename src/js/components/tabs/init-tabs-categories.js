import JsTabs from "js-tabs";
import createProductCards from "../create-product-card";

function initTabsCategory(tabsId, categoriesList, productsAll) {

    const categories = categoriesList;
    const tabTitleTemplate = document.querySelector('.template-tab-title');
    const tabContentTemplate = document.querySelector('.template-tab-content');
    const tabTitles = document.querySelector('.js-tabs-head');
    const tabContents = document.querySelector('.js-tabs-content');
    categories.forEach((category, i) => {
        const tabTitle = tabTitleTemplate.content.cloneNode(true);
        const tabContent = tabContentTemplate.content.cloneNode(true);
        if (i === 0) {
            localStorage.setItem('tab-id', category.id);
            const productsByCategory = productsAll.filter(p => p.categoryId === category.id)
            const productsElements = createProductCards(productsByCategory, category)
          console.log(productsByCategory)
          console.log(category)
          console.log(productsAll)
            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab active`;
            tabTitle.querySelector('li').setAttribute('data-id', category.id);
            tabContent.querySelector('li').className = 'js-tabs__content active';
            tabContent.querySelector('li').appendChild(productsElements);
        } else {
            const productsByCategory = productsAll.filter(p => p.categoryId === category.id)
            const productsElements = createProductCards(productsByCategory, category)

            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab`;
            tabTitle.querySelector('li').setAttribute('data-id', category.id);
            tabContent.querySelector('li').className = 'js-tabs__content';
            tabContent.querySelector('li').appendChild(productsElements)
        }




        tabTitle.querySelector('img').src = category.imageFile;
        tabTitle.querySelector('.js-tab-title').textContent = category.name;
        tabTitle.querySelector('li').addEventListener('click', function () {
            localStorage.setItem('tab-id', this.getAttribute('data-id'));
        })
        tabTitles.appendChild(tabTitle);
        tabContents.appendChild(tabContent)








    });




    const myTabs = new JsTabs({
        elm: tabsId
    })
    myTabs.init();
}

module.exports = initTabsCategory;
