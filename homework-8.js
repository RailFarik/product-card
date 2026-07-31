// №3 Создайте объект на основе ваших данных.

const myData = {
    name: 'Rail',
    surname: 'Farkhutdinov',
    age: 33,
    mail: 'railfarhytdinov4@gmail.com',
    work: 'electrician',
    country: 'Russia',
    city: 'Nizhnekamsk',
    maritalStatus: 'married',
    children: 'Three children'
}

console.log(myData);

/* №4 Создайте объект, который будет хранить данные об автомобиле.
Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
*/

const myCar = {
    brand: 'LADA',
    model: 'vesta',
    year: 2024,
    color: 'white',
    transmission: 'cvt',
}

myCar.Owner = myData

console.log(myCar);

// №5 Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.

function checkMaxSpeed(myCar) {
    if('maxSpeed' in myCar)
    {
        return;
    } else {
        myCar.maxSpeed = '220 км/ч'
    }
}

checkMaxSpeed(myCar)

/*№6 Написать функцию, которая получает первым аргументом — 
объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
*/

function myObject(myCar, maxSpeed) {
    if(maxSpeed in myCar) {
        console.log(myCar[maxSpeed]);
    }

}

myObject(myCar, 'maxSpeed');


// №7 Создать массив, который содержит названия продуктов (просто строки).

const products = ['хлеб', 'молоко', 'печеньки', 'масло', 'крупа'];

console.log(products);

// №8 Создать массив, состоящий из объектов, где объект представляет собой книгу.

const books = [
{
        title: 'Война и мир',
        author: 'Лев Толстой',
        year: 1869,
        coverColor: 'зеленый',
        genre: 'роман-эпопея'
    },
    {
        title: 'Винни Пух',
        author: 'Алан Милн',
        year: 1926,
        coverColor: 'желтый',
        genre: 'детская литература'
    },
    {
        title: 'Богатый папа, бедный папа',
        author: 'Роберт Кийосаки',
        year: 1997,
        coverColor: 'синий',
        genre: 'финансовая литература'
    },
    {
        title: 'Сахих Бухари',
        author: 'Мухаммад аль-Бухари',
        year: 846,
        coverColor: 'зеленый',
        genre: 'религиозная литература (хадисы)'
    }
]

books.push(
{
        title: 'Мойдодыр',
        author: 'Корней Иванович Чуковский',
        year: 1923,
        coverColor: 'синий',
        genre: 'Сказка в стихах, детская литература'
    }
)

console.log(books);

// №9 Создать еще один массив и объединить эти два массива в один.

const harryPotterBooks = [
{
        title: 'Гарри Поттер и философский камень',
        author: 'Джоан Роулинг',
        year: 1997,
        description: 'Первый год обучения Гарри в Хогвартсе.'
    },
    {
        title: 'Гарри Поттер и Тайная комната',
        author: 'Джоан Роулинг',
        year: 1998,
        description: 'Второй год Гарри в Хогвартсе.'
    },
    {
        title: 'Гарри Поттер и узник Азкабана',
        author: 'Джоан Роулинг',
        year: 1999,
        description: 'Третий год обучения.'
    },
    {
        title: 'Гарри Поттер и Кубок огня',
        author: 'Джоан Роулинг',
        year: 2000,
        description: 'Четвертый год и Турнир Трёх Волшебников.'
    }
]

console.log(harryPotterBooks);

const allMyBooks = [...books,...harryPotterBooks];

console.log(allMyBooks);

/* №10 Написать функцию, которая принимает массив сущностей с задания №9.
 Добавляем новое свойство для объекта "isRare (это редкий)" в зависимости от года выпуска книги.
*/

function addRareProperty(booksArray) {
    return booksArray.map(book => ({...book,
    isRare: book.year < 2000 ? true : false 
    }));
}

const updatedBooks = addRareProperty(allMyBooks);

console.log(updatedBooks);