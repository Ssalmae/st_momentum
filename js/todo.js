const toDoForm = document.querySelector(".todo_form");
const toDoInput = document.querySelector(".todo_input");
const toDoList = document.querySelector(".todo_list");

const LS_TODO = "todo";

let toDos = [];

function submitToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    text: toDo,
    id: Date.now(),
  };
  toDos.push(toDoObj);
  saveToDo();
  printToDo(toDoObj);
}

function printToDo(TODO) {
  const li = document.createElement("li");
  li.id = TODO.id;
  const span = document.createElement("span");
  span.innerText = TODO.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((target) => target.id !== parseInt(li.id));
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(LS_TODO, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(LS_TODO);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printToDo);
}
