const input = document.getElementById("input1");
const createBtn = document.getElementById("createBtn");
const label = document.getElementById("label_name");
const list = document.getElementById("listid");
const complete = document.getElementById("yes_btn");
const page = document.getElementById("pageid");

function addHtml(value, index) {
  const completedStyleTitle = value.completed
    ? "text-decoration: line-through;"
    : "none";

  const completedStyleBtn = value.completed
    ? "background: rgb(197, 187, 4);"
    : "none";

  list.insertAdjacentHTML(
    "beforeend",
    `<li>
              <div id="label_name" style = '${completedStyleTitle}' class="lable">${value.title}</div>
              <div class="btns">
                <span id="yes_btn" data-index='${index}' data-type='resolve' style = '${completedStyleBtn}' class="btn-success _green">&check;</span>
                <span id="no_btn"  data-index='${index}' data-type='delete' class="btn-danger _red">&times;</span>
              </div>
            </li>`
  );
}

function addDefaulNotes() {
  list.innerHTML = "";
  for (let i = 0; i <= defaulNotes.length - 1; i++) {
    addHtml(defaulNotes[i], i);
  }
  if (defaulNotes.length === 0) {
    list.innerHTML = '<p class="page" id="pageid">Заметок пока нет</p>';
  }
}

createBtn.onclick = function () {
  if (input.value.length === 0) {
    return;
  }

  const newNote = {
    title: input.value,
    completed: false,
  };

  defaulNotes.push(newNote);

  addDefaulNotes();

  input.value = "";
};

const defaulNotes = [
  {
    title: "1. Почитать книгу",
    completed: false,
  },
  {
    title: "2. Покушать",
    completed: false,
  },
  {
    title: "3. Узнать что-то новое",
    completed: false,
  },
];

addDefaulNotes();

list.onclick = function (event) {
  const indexBtn = parseInt(event.target.dataset.index);
  const typeBtn = event.target.dataset.type;

  if (typeBtn === "resolve") {
    defaulNotes[indexBtn].completed = !defaulNotes[indexBtn].completed;
  } else if (typeBtn === "delete") {
    defaulNotes.splice(indexBtn, 1);
  }
  addDefaulNotes();
};
