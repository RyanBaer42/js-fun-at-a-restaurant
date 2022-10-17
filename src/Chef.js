class Chef {
  constructor(name,restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, ifMorning){
    if (ifMorning === true){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  checkForFood(foodItem){
    if (this.restaurant.menus.breakfast.name.includes(foodItem.name)){
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
}


module.exports = Chef
