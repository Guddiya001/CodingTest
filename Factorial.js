/*
Factorial: Write a function to calculate the factorial of a given number.
*/




function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
console.log(factorialRecursive(5))


/*

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

*/