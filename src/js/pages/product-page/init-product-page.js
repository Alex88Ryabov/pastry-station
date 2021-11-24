import createProductPage from "./create-product-page"

function initProductPage() {
    fetch('/data/products.json')
        .then(responce => {
            responce.json().then(res => {
                createProductPage(res);
            })
        })

        
}

module.exports = initProductPage