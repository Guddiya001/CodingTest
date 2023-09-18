
// sum the numeric values in the given string while ignoring the non-numeric characters.

function sumNumbersInString(inputString) {
  const numbers = inputString.match(/\d+/g); // Extract all numeric sequences
  if (!numbers) {
    return 0; // No numbers found in the string
  }

  const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return sum;
}

const inputString = "a-1-g-j-4-h-4-6-b-3-4-5-f-4-f-g-2";
const result = sumNumbersInString(inputString);
console.log("Sum of numbers:", result);
