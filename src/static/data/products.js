// 1. Сделать счетчик - задача одна!!)


const products = [
    // Популярное id = 1
    {
        imgUrl: './img/mini-set.jpg',
        title: 'Популярное 1',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195 ₴',
        type: 'Выпечка',
        id: 101,
        parentId: 1,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]
    },
    {
        imgUrl: './img/mini-set.jpg',
        title: 'Популярное 2',
        icon: './img/croissant.png',
        iconName: 'Круассан',
        price: '195 ₴',
        type: 'Выпечка',
        id: 101,
        parentId: 1,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]
    },
    // Избранное id = 2
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Избранное 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Избранное',
        id: 103,
        parentId: 2,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Избранное 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Избранное',
        id: 103,
        parentId: 2,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    // Завтраки id = 3
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Завтраки 1',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Завтраки',
        id: 105,
        parentId: 3,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/kuriniy-bulion.jpg',
        title: 'Завтраки 2',
        icon: './img/breakfast.png',
        iconName: 'Завтрак',
        price: '50 ₴',
        type: 'Завтраки',
        id: 105,
        parentId: 3,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 2', text: 'какой-то текст' }, { title: 'Заголовок 3', text: 'какой-то текст' }]

    },
    // Выпечка id = 4
    {
        imgUrl: './img/croissant-apricot.jpg',
        title: 'Выпечка 1',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85 ₴',
        type: 'Выпечка',
        id: 107,
        parentId: 4,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 2', text: 'какой-то текст' }, { title: 'Заголовок 3', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/croissant-apricot.jpg',
        title: 'Выпечка 2',
        icon: './img/croissant.png',
        iconName: 'круассан',
        price: '85 ₴',
        type: 'Выпечка',
        id: 107,
        parentId: 4,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 2', text: 'какой-то текст' }, { title: 'Заголовок 3', text: 'какой-то текст' }]

    },
    // Кофе id = 5
    {
        imgUrl: './img/cappuccino.jpg',
        title: 'Кофе 1',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75 ₴',
        type: 'Кофе',
        id: 109,
        parentId: 5,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/cappuccino.jpg',
        title: 'Кофе 2',
        icon: './img/coffee.png',
        iconName: 'Кофе',
        price: '75 ₴',
        type: 'Кофе',
        id: 109,
        parentId: 5,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    //  Сэндвич id = 6
    {
        imgUrl: './img/sandwich.jpg',
        title: 'Сэндвич 1',
        icon: './img/sandwich.png',
        iconName: 'Сэндвич',
        price: '150 ₴',
        type: 'Сэндвичи',
        id: 111,
        parentId: 6,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/sandwich.jpg',
        title: 'Сэндвич 2',
        icon: './img/sandwich.png',
        iconName: 'Сэндвич',
        price: '150 ₴',
        type: 'Сэндвичи',
        id: 112,
        parentId: 6,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]


    },
    // Салат id = 7
    {
        imgUrl: './img/salat-zelen.jpg',
        title: 'Салат 1',
        icon: './img/salad.png',
        iconName: 'Салат',
        price: '150 ₴',
        type: 'Салаты',
        id: 113,
        parentId: 7,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/salat-zelen.jpg',
        title: 'Салат 2',
        icon: './img/salad.png',
        iconName: 'Салат',
        price: '150 ₴',
        type: 'Салаты',
        id: 113,
        parentId: 7,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    // Хлеб id = 8
    {
        imgUrl: './img/baget-pshenichniy.jpg',
        title: 'Хлеб 1',
        icon: './img/bread.png',
        iconName: 'Хлеб',
        price: '35 ₴',
        type: 'Хлеб',
        id: 115,
        parentId: 8,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
    {
        imgUrl: './img/baget-pshenichniy.jpg',
        title: 'Хлеб 2',
        icon: './img/bread.png',
        iconName: 'Хлеб',
        price: '35 ₴',
        type: 'Хлеб',
        id: 116,
        parentId: 8,
        description: 'Какое-то описание',
        info: [{ title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }, { title: 'Заголовок 1', text: 'какой-то текст' }]

    },
];

module.exports = products;