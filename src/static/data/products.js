// 1. каждой категории добавить по два товара С ПРАВИЛЬНЫМИ id!!!
// 2. добавить еще один template(в index.html) для карточки товара!!!
// 3. вставить карточки товара под табами (div.productsTest)

const products = [
    // Популярное id = 1
    {
        "imgUrl": "./img/baget-pshenichniy.jpg",
        "link": "product-page.html",
        "title": "Популярное 1",
        "icon": "./img/bread.png",
        "iconName": "Хлеб",
        "price": "35",
        "type": "Хлеб",
        "id": 101,
        "parentId": 1 

    },
    {
        "imgUrl": "./img/baget-pshenichniy.jpg",
        "link": "product-page.html",
        "title": "Популярное 2",
        "icon": "./img/bread.png",
        "iconName": "Хлеб",
        "price": "35",
        "type": "Хлеб",
        "id": 102,
        "parentId": 1 

    },
    // Избранное id = 2
    {
        "imgUrl": "./img/baget-pshenichniy.jpg",
        "link": "product-page.html",
        "title": "Избранное 1",
        "icon": "./img/bread.png",
        "iconName": "Хлеб",
        "price": "35",
        "type": "Хлеб",
        "id": 103,
        "parentId": 2 

    },
    {
        "imgUrl": "./img/baget-pshenichniy.jpg",
        "link": "product-page.html",
        "title": "Избранное 2",
        "icon": "./img/bread.png",
        "iconName": "Хлеб",
        "price": "35",
        "type": "Хлеб",
        "id": 104,
        "parentId": 2 

    },
];

module.exports = products;