// const getData = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// };

// const url = "https://jsonplaceholder.typicode.com/todos";

// try {
//   const data = await getData(url);
//   console.log(data);
// } catch (error) {
//   console.log(error.message);
// }
const input = document.getElementById("input1");
const createBtn = document.getElementById("createBtn");
const label = document.getElementById("label_name");
const list = document.getElementById("listid");
const complete = document.getElementById("yes_btn");
const page = document.getElementById("pageid");
const counter = document.getElementById("counterid");

function addHtml(value, index) {
  const completedStyleText = value.completed
    ? "text-decoration: line-through;"
    : "none";

  const completedStyleBtn = value.completed
    ? "background: rgb(197, 187, 4);"
    : "none";

  list.insertAdjacentHTML(
    "beforeend",
    `<li>
              <div id="label_name" style='${completedStyleText}' class="lable">${value.title}</div>
              <div class="btns">
                <span id="yes_btn" style='${completedStyleBtn}' data-type='resolve' data-index='${index}' class="btn-success _green">&check;</span>
                <span id="no_btn" data-index='${index}' data-type='delete'  class="btn-danger _red">&times;</span>
              </div>
            </li>`
  );
}

const defNotes = [
  {
    title: "Покушать",
    completed: false,
  },
  {
    title: "Почавкать",
    completed: false,
  },
  {
    title: "Похрумкать",
    completed: false,
  },
];

function loadDefNotes() {
  list.innerHTML = "";
  for (let i = 0; i <= defNotes.length - 1; i++) {
    addHtml(defNotes[i], i);
  }
}

loadDefNotes();

createBtn.onclick = () => {
  if (input.value.length === 0) {
    return;
  }

  const noteItem = {
    title: input.value,
    completed: false,
  };

  defNotes.push(noteItem);

  loadDefNotes();

  input.value = "";
};

list.addEventListener("click", (event) => {
  const indexBtn = parseInt(event.target.dataset.index);
  const typeBtn = event.target.dataset.type;

  if (typeBtn === "resolve") {
    defNotes[indexBtn].completed = !defNotes[indexBtn].completed;
  } else if (typeBtn === "delete") {
    defNotes.splice(indexBtn, 1);
  }

  loadDefNotes();
});
