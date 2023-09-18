//table of 5 in setinterval
let i = 1; // Initialize a variable to keep track of the current multiplier

function printTable() {
  if (i <= 10) {
    const result = i * 5; // Calculate the result
    console.log(`5 x ${i} = ${result}`); // Print the result
    i++; // Increment the multiplier
  } else {
    clearInterval(intervalId); // Stop the interval when done
  }
}

const intervalId = setInterval(printTable, 1000); // Call printTable every second (1000 milliseconds)
