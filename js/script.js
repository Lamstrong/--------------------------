const list = document.querySelector(".list");
const filterInput = document.querySelector(".main__input");
let USERS = [];

async function getData(url) {
  list.innerHTML = '<li class="load">Загрузка...</li>';
  const res = await fetch(url);
  const json = await res.json();
  USERS = json;
  loadUsers(json);
}

getData("https://jsonplaceholder.typicode.com/users").catch(
  (err) => (list.innerHTML = '<li class="error">Ошибка загрузки данных</li>')
);

function loadUsers(user = []) {
  const toHtml = user.map(addHTML).join("");
  list.innerHTML = toHtml;
  if (user.length === 0) {
    list.innerHTML =
      '<li class="notFound">Пользователей с таким именем не найденно</li>';
  }
}

function addHTML(user) {
  return `<li class="list__item">${user.name}</li>`;
}

filterInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filterUsers = USERS.filter((users) => {
    return users.name.toLowerCase().includes(value);
  });
  loadUsers(filterUsers);
  console.log(event.target.value);
});
