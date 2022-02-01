import createProductPage from "./create-product-page";
import initBurger from '../../components/init-burger';
import environment from "../../helpers/environment";

function initProductPage() {
  initBurger();
  const queryParams = window.util.getQueryParams(window.location.search);
  const promiseCategories = fetch(`${environment.apiUrl}/api/categories/${queryParams.id}`);
  const promiseProducts = fetch(`${environment.apiUrl}/api/products/${queryParams.id}`);

  fetch(`${environment.apiUrl}/api/products/${queryParams.id}`)
    .then(value => {
      value.json().then(product => {
        fetch(`${environment.apiUrl}/api/categories/${product.categoryId}`)
          .then(res => {
            res.json().then(category => {
              createProductPage(product, category);
            })
          })
      })
    })



  // Promise.all([promiseCategories, promiseProducts])
  //   .then(values => {
  //     const promises = [];
  //     values.forEach(value => {
  //       promises.push(value.json())
  //     })
  //
  //     Promise.all(promises)
  //       .then(data => {
  //         const category = data[0];
  //         const product = data[1];
  //         createProductPage(product, category)
  //       })
  //   });
}

module.exports = initProductPage
