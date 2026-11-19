const userTemplate = document.getElementById('user-template');

const message = document.getElementById('message');
const usersContainer = document.getElementById('users');

const deleteAllButton = document.getElementById('delete-all');
const getAllButton = document.getElementById('get-all');

let users = [];
let allUsers = [];

const savedUsers = localStorage.getItem('users');

async function fetchUsers() {
    const response = await fetch('./users.json');

    if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
    }

    const data = await response.json();

    allUsers = data.users;
}

if (savedUsers === null) {
    message.textContent = 'Данные загружаются';

    setTimeout(() => {
        fetchUsers()
            .then(data => {
                users = [...data];

                localStorage.setItem('users', JSON.stringify(users));

                renderUsers(users);

                console.log('Данные загружены');
            })
            .catch(error => {
                console.error(error);
                message.textContent = 'Ошибка при загрузке данных';
            });
    }, 2000);
} else {
    users = JSON.parse(savedUsers);

    renderUsers(users);

    console.log('Данные найдены');

    fetchUsers()
        .catch(error => {
            console.error(error);
        });
};


deleteAllButton.addEventListener('click', () => {
    users = [];

    localStorage.setItem('users', JSON.stringify(users));

    renderUsers(users);
});

getAllButton.addEventListener('click', () => {
    if (allUsers.length === 0) {
        message.textContent = 'Исходный список пользователей пуст или ещё не загружен';
        return;
    }

    if (users.length === allUsers.length) {
        message.textContent = 'Все пользователи уже отображены';
        return;
    }

    users = [...allUsers];

    localStorage.setItem('users', JSON.stringify(users));

    renderUsers(users);
});

function renderUsers(usersList) {
    usersContainer.innerHTML = '';

    if (usersList.length === 0) {
        message.textContent = 'Пользователи не найдены';
        return;
    }

    message.textContent = '';

    usersList.forEach(user => {
        const card = userTemplate.content.cloneNode(true);

        card.querySelector('.user-name').textContent =
            `${user.name} ${user.surname}`;

        card.querySelector('.user-email').textContent =
            `Email: ${user.email}`;

        card.querySelector('.user-age').textContent =
            `Возраст: ${user.age}`;

        const deleteButton = card.querySelector('.delete-user');

        deleteButton.dataset.id = user.id;

        deleteButton.addEventListener('click', () => {
            const userId = Number(deleteButton.dataset.id);

            users = users.filter(user => user.id !== userId);

            localStorage.setItem('users', JSON.stringify(users));

            renderUsers(users);
        });
        usersContainer.append(card);
    });
};