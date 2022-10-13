
function takeOrder(singleOrder, deliveryOrders){
  if (deliveryOrders.length < 3){
    deliveryOrders.push(singleOrder)
  }
}

function refundOrder(refundOrderNumber, deliveryOrders){
  for (let i = 0; i < deliveryOrders.length; i++){
    if (deliveryOrders[i].orderNumber === refundOrderNumber){
      deliveryOrders.splice(i, 1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders){
  var items = []
  for (let i = 0; i < deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item)
  }
  return items.join(', ')
}

function searchOrder(deliveryOrders, itemName){
  var result = false
  for (let i = 0; i < deliveryOrders.length; i++){
    if (deliveryOrders[i].item === itemName){
      result = true
    }
  }
  return result
}







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
