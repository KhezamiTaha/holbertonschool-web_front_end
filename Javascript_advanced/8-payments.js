function processPayment(amount) {
  console.log(`Collecting payment of ${amount}`)
}

function processOrder(orderId, amount) {
  console.log(`${orderId} is being processed`)
  processPayment(amount)
  console.log(`${orderId} has been fully processed`)
}


console.log(`Processing orders`)
processOrder(1771, 300)
processOrder(1772, 31)
processOrder(1773, 1500)
console.log(`All the orders have been processed`)
