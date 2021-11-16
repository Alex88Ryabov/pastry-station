// 1. каждой категории добавить по два товара С ПРАВИЛЬНЫМИ id!!!
// 2. добавить еще один template(в index.html) для карточки товара!!!
// 3. вставить карточки товара под табами (div.productsTest)

const products = [
    // Популярное id = 1
    {
        imgUrl: './img/mini-set.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Популярное 1',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195 ₴',
        type: 'Выпечка',
        id: 101,
        parentId: 1 
    },
    {
        imgUrl: './img/mini-set.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Популярное 2',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195 ₴',
        type: 'Выпечка',
        id: 101,
        parentId: 1
    },
    // Избранное id = 2
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Избранное 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Избранное',
        id: 103,
        parentId: 2 

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Избранное 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Избранное',
        id: 103,
        parentId: 2

    },
    // Завтраки id = 3
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Завтраки 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Завтраки',
        id: 105,
        parentId: 3 

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Завтраки 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Завтраки',
        id: 105,
        parentId: 3

    },
    // Выпечка id = 4
    {
        imgUrl: './img/croissant-apricot.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Выпечка 1',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85 ₴',
        type: 'Выпечка',
        id: 107,
        parentId: 4 

    },
    {
        imgUrl: './img/croissant-apricot.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Выпечка 2',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85 ₴',
        type: 'Выпечка',
        id: 107,
        parentId: 4

    },
    // Кофе id = 5
    {
        imgUrl: './img/cappuccino.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Кофе 1',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75 ₴',
        type: 'Кофе',
        id: 109,
        parentId: 5 

    },
    {
        imgUrl: './img/cappuccino.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Кофе 2',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75 ₴',
        type: 'Кофе',
        id: 109,
        parentId: 5

    },
    //  Сэндвич id = 6
    {
        imgUrl: './img/sandwich.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Сэндвич 1',
        icon: './img/sandwich.png',
        iconName: 'Сэндвич',
        price: '150 ₴',
        type: 'Сэндвичи',
        id: 111,
        parentId: 6

    },
    {
        imgUrl: './img/sandwich.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Сэндвич 2',
        icon: './img/sandwich.png',
        iconName: 'Сэндвич',
        price: '150 ₴',
        type: 'Сэндвичи',
        id: 112,
        parentId: 6 

    },
    // Салат id = 7
    {
        imgUrl: './img/salat-zelen.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Салат 1',
        icon: './img/salad.png',
        iconName: 'Салат',
        price: '150 ₴',
        type: 'Салаты',
        id: 113,
        parentId: 7 

    },
    {
        imgUrl: './img/salat-zelen.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Салат 2',
        icon: './img/salad.png',
        iconName: 'Салат',
        price: '150 ₴',
        type: 'Салаты',
        id: 113,
        parentId: 7

    },
    // Хлеб id = 8
    {
        imgUrl: './img/baget-pshenichniy.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Хлеб 1',
        icon: './img/bread.png',
        iconName: 'Хлеб',
        price: '35 ₴',
        type: 'Хлеб',
        id: 115,
        parentId: 8 

    },
    {
        imgUrl: './img/baget-pshenichniy.jpg',
        link: 'product-page.html',
        backLink: 'index.html',
        title: 'Хлеб 2',
        icon: './img/bread.png',
        iconName: 'Хлеб',
        price: '35 ₴',
        type: 'Хлеб',
        id: 116,
        parentId: 8 

    },
];

module.exports = products;