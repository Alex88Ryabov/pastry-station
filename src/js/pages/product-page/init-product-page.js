import createProductPage from "./create-product-page";
import initBurger from '../../components/init-burger';

function initProductPage() {
    initBurger();
    fetch('/data/products.json')
        .then(responce => {
            responce.json().then(res => {
                createProductPage(res);
            })
        })

        
}

module.exports = initProductPage