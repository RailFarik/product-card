function showTemperature(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию.`);
}

showTemperature('Нижнекамске', '30');

const speedLight = 1079252848;

function checkSpeed(speed) {
    if (speed > speedLight) {
        console.log('Сверхсветовая скорость');
    } else if (speedLight === speed) {
        console.log('Скорость света');
    } else {
        console.log('Субсветовая скорость');
    }
}

checkSpeed(9999999999);
checkSpeed(1003985334);
checkSpeed(1079252848);

const socks = 'Носки';
const price = 33;

function buySocks(budget) {
    if (budget >= price) {
        console.log(`${socks} приобретены. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс.`);
    }
}

buySocks(40);
buySocks(24);

function showMessage(message) {
    console.log(`В ${message} легко запутаться и он сложный.`);
}

showMessage('JavaScript');

const productName = 'car';
const productPrice = 2500000;
const productInStock = true;