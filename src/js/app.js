// import sayHello from './lib/sayHello';

// sayHello();

import JsTabs from 'js-tabs'

if (window.location.pathname === '/') {
  const myTabs = new JsTabs({
    elm: '#my-js-tabs'
  })
  myTabs.init()
}




fetch('/data/categories.json')
  .then(response => {
    response.json().then(res => {
      console.log(res);

    })
  })
  .catch(error => {
    console.log(error);
  });

