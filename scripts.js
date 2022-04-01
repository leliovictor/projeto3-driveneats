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

function closeOrder() {
  ordersConfirmation();

  totalConfirmation();

  document.querySelector(".span").classList.remove("disabled");
}

function ordersConfirmation() {
  let confirmationMealName = document.querySelector(".confirmation_meal h2");
  confirmationMealName.innerHTML = meal.children[1].textContent;

  let confirmationMealValue = document.querySelector(".confirmation_meal h3");
  confirmationMealValue.innerHTML = meal.children[3].textContent.slice(3,8);

  let confirmationDrinkName = document.querySelector(".confirmation_drink h2");
  confirmationDrinkName.innerHTML = drink.children[1].textContent;

  let confirmationDrinkValue = document.querySelector(".confirmation_drink h3");
  confirmationDrinkValue.innerHTML = drink.children[3].textContent.slice(3,8);

  let confirmationDessertName = document.querySelector(".confirmation_dessert h2");
  confirmationDessertName.innerHTML = dessert.children[1].textContent;

  let confirmationDessertValue = document.querySelector(".confirmation_dessert h3");
  confirmationDessertValue.innerHTML = dessert.children[3].textContent.slice(3,8);

}

function totalConfirmation() {
    let confirmationTotalValue = document.querySelector(".confirmation_total h3");
    confirmationTotalValue.innerHTML = `R$ ${totalSum()}`;
}

function totalSum() {
    let mealValue = transformStringToNumber(meal.children[3].textContent);
    let drinkValue = transformStringToNumber(drink.children[3].textContent);
    let dessertValue = transformStringToNumber(dessert.children[3].textContent);
    return mealValue+drinkValue+dessertValue;
}

function transformStringToNumber(string) {
    let real = string.slice(3,5)
    let cent = string.slice(6,8)
    let value = parseFloat(`${real}.${cent}`)
    console.log(value);
    return value
}

function sendOrder() {
    let name = prompt("Digite seu nome");
    let adress = prompt("Informe seu endereço");
}


function cancel() {
  document.querySelector(".span").classList.add("disabled");
}
