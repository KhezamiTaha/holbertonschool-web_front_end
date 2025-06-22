// Initialize stock
const stock = {
    macbook: 2,
    iphone: 4,
};

// Function to process payment
function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

// Function to process error
function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
}

// Function to process an order
function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);

    const lowerCaseItem = itemName.toLowerCase();

    if (stock[lowerCaseItem] > 0) {
        callbackPayment(itemName);
    } else if (stock[lowerCaseItem] === 0) {
        callbackError(itemName);
    } else {
        console.log(`Item ${itemName} is not offered`);
    }
}

// Prompt user input and process the order
const item = prompt("Please enter the item you would like to purchase (Macbook, iPhone):");
processOrder(item, processPayment, processError);
