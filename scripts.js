let meal;
let drink;
let dessert;

function selectOrder(element) {

  selectItem(element);

  removeAlreadySelected(element);

  register();

  checkOrders();
}

function selectItem(element) {
  element.classList.toggle("selected");
  element.querySelector(".checkmark").classList.toggle("enabled");
}

function removeAlreadySelected(element) {
  let category = element.parentElement.className;
  if (category == "meals") {
    removeMealAlreadySelected();
  }

  if (category == "drinks") {
    removeDrinkAlreadySelected();
  }

  if (category == "desserts") {
      removeDessertAlreadySelected();
  }
}

function removeMealAlreadySelected(element) {
  if (meal !== undefined && meal !== element) {
    meal.querySelector(".checkmark").classList.remove("enabled");
    meal.classList.remove("selected");
  }
}

function removeDrinkAlreadySelected(element) {
  if (drink !== undefined && drink !== element) {
    drink.querySelector(".checkmark").classList.remove("enabled");
    drink.classList.remove("selected");
  }
}

function removeDessertAlreadySelected(element) {
  if (dessert !== undefined && dessert !== element) {
    dessert.querySelector(".checkmark").classList.remove("enabled");
    dessert.classList.remove("selected");
  }
}

function register() {
  meal = document.querySelector(".meals .selected");
  drink = document.querySelector(".drinks .selected");
  dessert = document.querySelector(".desserts .selected");

  checkNull();
}

function checkNull() {
  if (meal === null) {
    meal = undefined;
  }
  if (drink === null) {
    drink = undefined;
  }
  if (dessert === null) {
    dessert = undefined;
  }
}

function checkOrders() {
  if (meal !== undefined && drink !== undefined && dessert !== undefined) {
    document.querySelector(".finish-order").classList.add("enabled");
  } else {
    document.querySelector(".finish-order").classList.remove("enabled");
  }
}
