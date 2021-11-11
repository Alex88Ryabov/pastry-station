// import sayHello from './lib/sayHello';

// sayHello();

fetch('/data/categories.json')
  .then(response => {
    response.json().then(res => {
      console.log(res);
      
    })
  })
  .catch(error => {
    console.log(error);
  });