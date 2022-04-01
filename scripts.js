let meal;
let drink;
let dessert;

let teste;
//parentElement

function selectMeal(mealOrder) {
  mealOrder.classList.toggle("selected");
  mealOrder.querySelector(".checkmark").classList.toggle("enabled");

  if (meal !== undefined && meal !== mealOrder) {
    meal.querySelector(".checkmark").classList.remove("enabled");
    meal.classList.remove("selected");
  }

  meal = document.querySelector(".meals .selected");

  if (meal === null) {
    meal = undefined;
  }
}

function selectDrink(drinkOrder) {
  drinkOrder.classList.toggle("selected");
  drinkOrder.querySelector(".checkmark").classList.toggle("enabled");

  if (drink !== undefined && drink !== drinkOrder) {
    drink.querySelector(".checkmark").classList.remove("enabled");
    drink.classList.remove("selected");
  }

  drink = document.querySelector(".drinks .selected");

  if (drink === null) {
    drink = undefined;
  }
}

function selectDessert(dessertOrder) {
  dessertOrder.classList.toggle("selected");
  dessertOrder.querySelector(".checkmark").classList.toggle("enabled");

  if (dessert !== undefined && dessert !== dessertOrder) {
    dessert.querySelector(".checkmark").classList.remove("enabled");
    dessert.classList.remove("selected");
  }

  dessert = document.querySelector(".desserts .selected");

  if (dessert === null) {
    dessert = undefined;
  }
}

