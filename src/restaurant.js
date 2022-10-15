function createRestaurant(newRestaurant){
  var newRestaurant = {
    name: newRestaurant,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[],
    }
  }
  return newRestaurant
}

function addMenuItem(newRestaurant, newItem){
  if (!newRestaurant.menus[newItem.type].includes(newItem)){
    return newRestaurant.menus[newItem.type].push(newItem)
  }
}

function removeMenuItem(newRestaurant, itemName, itemType){
  for (let i = 0; i < newRestaurant.menus[itemType].length; i++){
  if (newRestaurant.menus[itemType][0].name === itemName){
    newRestaurant.menus[itemType].splice(0,1);
    return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    }
  }
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
