const message = document.getElementById('message');
const usersContainer = document.getElementById('users');

const deleteAllButton = document.getElementById('delete-all');
const getAllButton = document.getElementById('get-all');

let users = [];
let allUsers = [];

const savedUsers = localStorage.getItem('users');
const savedAllUsers = localStorage.getItem('allUsers');

if (savedAllUsers !== null) {
    allUsers = JSON.parse(savedAllUsers);
}

function fetchUsers() {
    return fetch('./users.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }

            return response.json();
        })
        .then(data => {
            allUsers = data.users;

            localStorage.setItem('allUsers', JSON.stringify(allUsers));

            return allUsers;
        });
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

    if (savedAllUsers === null) {
        fetchUsers()
            .catch(error => {
                console.error(error);
            });
    }
}

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
        const card = document.createElement('div');
        card.classList.add('user-card');

        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p>Email: ${user.email}</p>
            <p>Возраст: ${user.age}</p>
            <button class="delete-user" data-id="${user.id}">
                Удалить
            </button>
        `;

        usersContainer.append(card);

        const deleteButton = card.querySelector('.delete-user');

        deleteButton.addEventListener('click', () => {
            const userId = Number(deleteButton.dataset.id);

            users = users.filter(user => user.id !== userId);

            localStorage.setItem('users', JSON.stringify(users));

            renderUsers(users);
        });
    });
};