import JsTabs from "js-tabs";
import initTabsCategory from "../../components/tabs/init-tabs-categories";
import initBurger from '../../components/init-burger';
import environment from "../../helpers/environment";

function initHomePage() {
    initBurger();
    const myTabs = new JsTabs({
        elm: '#js-tabs-categories'
    })
    myTabs.init();
    const promiseCategories = fetch(`${environment.apiUrl}/api/categories`);
    const promiseProducts = fetch(`${environment.apiUrl}/api/products`);
    const activeTabId = localStorage.getItem('tab-id');
    // fetch('${environment.apiUrl}/api/categories')
    //   .then(res => {
    //     res.json()
    //       .then(categories => {
    //
    //         console.log(categories)
    //       })
    // })
    //   .catch(error => {
    //   console.log(error)
    // })

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
