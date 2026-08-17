import { products } from "./products-10.js";
console.log(products);

// Функция рендеринга:

function renderCards(productsArray, count) {

    const productTemplate = document.querySelector('.product-template');
    const productClearList = document.querySelector('.products.clear-list');
    const cardsToRender = productsArray.slice(0, count);

    if (cardsToRender.length < count) {
        console.warn(`Доступно только ${cardsToRender.length} карточек из ${count} запрошенных`);
    };

    cardsToRender.forEach(product => {
        const productClone = productTemplate.content.cloneNode(true);
        productClone.querySelector('.card__image').src = `images/${product.image}.jpg`;
        productClone.querySelector('.card__image').alt = product.alt;
        productClone.querySelector('.card__category').textContent = product.category;
        productClone.querySelector('.card__name').textContent = product.name;
        productClone.querySelector('.card__description').textContent = product.description;
        productClone.querySelector('.compound__title').textContent = product.compound__title;
        productClone.querySelector('.price__cost').textContent = `${product.price.toLocaleString()} ${product.currency}`;

        const list = productClone.querySelector('.compound__list');
        list.innerHTML = '';
        product.composition.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });

        productClearList.appendChild(productClone);
    });

};

// Функция получения карточек:

function getNumberOfCards() {
    let userInput = prompt('Сколько карточек отобразить? От 1 до 5');

    if (userInput === null) {
        alert('Вы отменили ввод. Будет показано 0 карточек по умолчанию.');
        return 0;
    };

    const number = Number(userInput);

    if (isNaN(number) || number < 1 || number > 5) {
        alert('Ошибка! Нужно ввести число от 1 до 5. Попробуйте еще раз.');
        return getNumberOfCards();
    };

    return number;
};

const cardCount = getNumberOfCards();

renderCards(products, cardCount);

// Метод reduce:

const productDescriptions = products.reduce((acc, product) => {
    acc.push({
        name: product.name,
        description: product.description
    });
    return acc;
}, []);

console.log(productDescriptions);