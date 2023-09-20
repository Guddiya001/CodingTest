function findPairsWithSum(numbers, givenSum) {
  const seenElements = new Set();
  const result = [];
 
  for (let i = 0; i < numbers.length; i++) {
    const difference = givenSum - numbers[i];
 
    if (seenElements.has(difference)) {
      result.push([numbers[i], difference]);
    }
 
    seenElements.add(numbers[i]);
  }
 
  return result;
}
 
const numbers = [2, 4, 3, 5, 7, 8, 9];
const givenSum = 7;
const pairs = findPairsWithSum(numbers, givenSum);
 
pairs.forEach(pair => {
  console.log(`(${pair[0]},${pair[1]})`);
});
