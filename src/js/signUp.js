const { default: refs } = require("./refs");

refs.signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let login = event.currentTarget.elements.login.value;
  let password = event.currentTarget.elements.password.value;
  localStorage.setItem("login", login);
  localStorage.setItem("pass", password);
});
