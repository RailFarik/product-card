import { userComments } from "./comments.js";
console.log(userComments);

// Уровень 1:
// Задание №2 - Создать массив чисел от 1 до 10. 
// Отфильтровать его таким образом, что бы мы получили массив чисел, начиная с 5.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(numbers);

const newNumbers = numbers.filter(number => number >= 5);
console.log(newNumbers);

// Задание №3 - Создать массив строк, относящихся к любой сущности,
// проверить есть ли в массиве какая-то определенная сущность.

const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Киви', 'Манго', 'Ананас'];
console.log(fruits);

const hasBanan = fruits.includes('Банан');
console.log(hasBanan); 

const hasGrape = fruits.includes('Виноград');
console.log(hasGrape); 

// Задание №4 - Написать функцию, которая аргументом будет принимать массив и 
// изменять его порядок на противоположный ("переворачивать"). Два вышеуказанных массива с помощью этой функции перевернуть.

function getReverseArray(array) {
    return [...array].reverse();
}

const reverseNumbers = getReverseArray(numbers);
const reverseFruits = getReverseArray(fruits);

console.log(reverseNumbers);
console.log(reverseFruits);

// Задание №7 - Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com".

const comComments = userComments.filter(comment => comment.email.includes('.com'));
console.log(comComments);

// Задание №8 - Перебрать массив таким образом, что бы пользователи 
// с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1.

const iteratedАrray = userComments.map(comment => ({
    ...comment, postId: comment.id <= 5 ? 2 : 1
}));

console.log(iteratedАrray);

// Задание №9 - Перебрать массив, что бы объекты состояли только из айди и имени.

const simplifiedComments = userComments.map(comment => ({
    id: comment.id,
    name: comment.name
}));

console.log(simplifiedComments);

// Задание №10 - Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
//  если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const commentsWithValidation = userComments.map(comment => ({
    ...comment, isInvalid: comment.body.length > 180 ? true : false
}));

console.log(commentsWithValidation);

// Уровень 3:
// Задание №11 - Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map.

const emailsWithReduce = userComments.reduce((accumulator, comment) => {
    accumulator.push(comment.email);
    return accumulator;
}, []);

const emailsWithMap = userComments.map(comment => comment.email);

console.log(emailsWithReduce);
console.log(emailsWithMap);

// Задание №12 - Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const toStringEmail = emailsWithMap.toString();

const joinEmail = emailsWithMap.join('/');

console.log(toStringEmail);
console.log(joinEmail);