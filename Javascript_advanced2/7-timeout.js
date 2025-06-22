// Log the start of the execution queue
console.log("Start of the execution queue");

// Schedule a timeout to log the final message
setTimeout(() => {
    console.log("Final code block to be executed");
}, 0);

// Loop to log iteration numbers
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Log the end of the loop printing
console.log("End of the loop printing");
