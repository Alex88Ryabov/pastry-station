import initTabsCategory from "../../components/tabs/init-tabs-categories";
import initBurger from '../../components/init-burger';

function initHomePage() {
    initBurger();
    const promiseCategories = fetch('/data/categories.json');
    const promiseProducts = fetch('/data/products.json');
    const activeTabId = localStorage.getItem('tab-id');

    Promise.all([promiseCategories, promiseProducts])
        .then(values => {
            const promises = [];
            values.forEach(value => {
                promises.push(value.json())
            })

            Promise.all(promises)
                .then(data => {
                    const categories = data[0];
                    const products = data[1];
                    initTabsCategory('#js-tabs-categories', categories, products)
                    if (activeTabId && window.location.search) {
                        document.querySelector(`#js-tabs-categories li[data-id="${activeTabId}"]`).click();
                    }

                    
                })
        });
}

module.exports = initHomePage;