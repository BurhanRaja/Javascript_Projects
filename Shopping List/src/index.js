import { card } from "./card";
import { categories } from "./category";
import "./css/style.css";
import { item } from "./item";

const displayCard = document.querySelector(".displayCardList");
const removeBtn = document.querySelector(".rvmBtn");
const submitBtn = document.querySelector(".submitBtn");
const alert = document.querySelector(".alert");
const alertMessage = document.querySelector(".alert p");

// Form Inputs
const selectEl = document.getElementById("catItem");
const quantity = document.getElementById("quantity");
const itemName = document.getElementById("itemName");

// Category Array
let categoryList = [
  "Fruit & Vegetables",
  "Meat & Seafood",
  "Dairy",
  "Frozen Foods",
  "Breads & Pasta",
  "Snacks",
  "Beverage",
  "Cleaning",
  "Others",
];

function showAlert(message, color) {
  alertMessage.innerHTML = message;
  alert.classList.remove("hide");
  alert.classList.add(`${color}`);
  setTimeout(() => {
    alert.classList.add("hide");
    alert.classList.remove(`${color}`);
  }, 3000);
}

// Display Categories
categories(selectEl, categoryList);

// Display Cards
for (let i = 0; i < categoryList.length; i++) {
  displayCard.insertAdjacentHTML("beforeend", card(categoryList[i], i + 1));
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    selectEl.value === "0" ||
    quantity.value === "" ||
    itemName.value === ""
  ) {
    showAlert("Please fill all the fields Correctly.", "error");
  } else {
    showAlert("Successfully Added.", "success");
    document
      .querySelector(`.displayItems-${selectEl.value}`)
      .insertAdjacentHTML(
        "afterbegin",
        item(itemName.value, quantity.value, selectEl.value)
      );
    selectEl.value = "0";
    quantity.value = "";
    itemName.value = "";
  }
});

// Enable HMR (Hot Module Replacement)
if (module.hot) {
  module.hot.accept();
}
