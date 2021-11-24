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
            const productsByCategory = productsAll.filter(p => p.parentId === category.id)
            const productsElements = createProductCards(productsByCategory)

            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab active`;
            tabContent.querySelector('li').className = 'js-tabs__content active'
            tabContent.querySelector('li').appendChild(productsElements)
        } else {
            const productsByCategory = productsAll.filter(p => p.parentId === category.id)
            const productsElements = createProductCards(productsByCategory)

            tabTitle.querySelector('li').className = `tabs__tab js-tabs__tab`;
            tabContent.querySelector('li').className = 'js-tabs__content';
            tabContent.querySelector('li').appendChild(productsElements)
        }

        tabTitle.querySelector('img').src = category.imageUrl;
        tabTitle.querySelector('.js-tab-title').textContent = category.name;

        tabTitles.appendChild(tabTitle);
        tabContents.appendChild(tabContent)
    });




    const myTabs = new JsTabs({
        elm: tabsId
    })
    myTabs.init();
}

module.exports = initTabsCategory;