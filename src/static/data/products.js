// 1. Сделать счетчик - задача одна!!)


const products = [
    // Торти id = 1
    {
        imgUrl: './img/mini-set.jpg',
        title: 'Наполеон',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195',
        unit: 'кг',
        type: 'Выпечка',
        id: 101,
        parentId: 1,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]
    },
    {
        imgUrl: './img/mini-set.jpg',
        title: 'Медовик',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195',
        unit: 'кг',
        type: 'Выпечка',
        id: 101,
        parentId: 1,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]
    },
    // Десерти id = 2
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Избранное 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50',
        type: 'Избранное',
        id: 103,
        parentId: 2,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Избранное 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50',
        type: 'Избранное',
        id: 103,
        parentId: 2,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]

    },
    // Печиво id = 3
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Завтраки 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50',
        type: 'Завтраки',
        id: 105,
        parentId: 3,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Завтраки 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50',
        type: 'Завтраки',
        id: 105,
        parentId: 3,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 2', text: 'який-небудь текст' }, { title: 'Заголовок 3', text: 'який-небудь текст' }]

    },
    // Цукерки id = 4
    {
        imgUrl: './img/croissant-apricot.jpg',
        title: 'Выпечка 1',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85',
        type: 'Выпечка',
        id: 107,
        parentId: 4,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 2', text: 'який-небудь текст' }, { title: 'Заголовок 3', text: 'який-небудь текст' }]

    },
    {
        imgUrl: './img/croissant-apricot.jpg',
        title: 'Выпечка 2',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85',
        type: 'Выпечка',
        id: 107,
        parentId: 4,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 2', text: 'який-небудь текст' }, { title: 'Заголовок 3', text: 'який-небудь текст' }]

    },
    // Квіти id = 5
    {
        imgUrl: './img/cappuccino.jpg',
        title: 'Кофе 1',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75',
        type: 'Кофе',
        id: 109,
        parentId: 5,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]

    },
    {
        imgUrl: './img/cappuccino.jpg',
        title: 'Кофе 2',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75',
        type: 'Кофе',
        id: 109,
        parentId: 5,
        description: 'Описання товару',
        info: [{ title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }, { title: 'Заголовок 1', text: 'який-небудь текст' }]

    },
];

module.exports = products;