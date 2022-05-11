const userForm = document.querySelector(".user");
const userInput = document.querySelector(".user_input");
const greeting = document.querySelector(".greeting");

function submitUser(event) {
  event.preventDefault();
  const userName = userInput.value;
  localStorage.setItem("username", userName);
  printGreeting(userName);
}

function printGreeting(userName) {
  userInput.remove();
  greeting.innerText = `${userName}님 좋은 하루 보내세요.`;
  greeting.classList.remove("hidden");
}

userForm.addEventListener("submit", submitUser);

const savedName = localStorage.getItem("username");

if (savedName !== null) {
  printGreeting(savedName);
}
