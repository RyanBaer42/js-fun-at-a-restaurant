function nameMenuItem(nameMenuItem) {
  return `Delicious ${nameMenuItem}`
};

function createMenuItem(nameMenuItem, itemPrice, typeOfItem) {
  var menuItem = {name:nameMenuItem, price:itemPrice, type: typeOfItem }
  return menuItem
};

function addIngredients(newIngredient, ingredients){
  if (!ingredients.includes(newIngredient)){
    ingredients.push(newIngredient)
  }
  return ingredients
}

function formatPrice(initialPrice){
  return `$${initialPrice}`
}

function decreasePrice(initialPrice){
  var decreasedValue = initialPrice - initialPrice *.1;
  return decreasedValue
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
