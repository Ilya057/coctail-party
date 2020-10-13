import refs from "./refs.js";
import fetch from "./fetch.js";
import template from "../template/coctail.hbs";
import { data } from "autoprefixer";
import debounce from "lodash.debounce";

refs.input.addEventListener(
  "input",
  debounce((e) => {
    refs.list.innerHTML = "";
    console.log(e.target.value);
    fetch._search = e.target.value;
    fetch.getFetch().then((data) => {
      renderTemplate(data.drinks);
    });

    refs.input.value = "";
  }, 1000)
);

function renderTemplate(data) {
  const drink = template(data);
  refs.list.insertAdjacentHTML("beforeend", drink);
  const listItem = document.querySelectorAll(".ingredients li");
  listItem.forEach((e) => {
    if (e.textContent === "") {
      e.style.display = "none";
    }
  });
}
