import initTabsCategory from "../../components/tabs/init-tabs-categories"

function initHomePage() {
    const promiseCategories = fetch('/data/categories.json');
    const promiseProducts = fetch('/data/products.json');

    Promise.all([promiseCategories, promiseProducts])
        .then(values => {
            const promises = [];
            values.forEach(value => {
                promises.push(value.json())
            })

            Promise.all(promises)
                .then(data => {
                    const categories = data[0];
                    const products = data[1]
                    initTabsCategory('#js-tabs-categories', categories, products)
                })
        });
}

module.exports = initHomePage;