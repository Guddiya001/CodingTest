const nestedArray = [1, 2, [3, 4], 5, [6, [7, 8, [9]]]];
const flatArray = nestedArray.flat(Infinity); // Infinity to flatten all levels

console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Using recursion:

function flattenArray(arr) {
    return arr.reduce((acc, current) => {
      if (Array.isArray(current)) {
        return [...acc, ...flattenArray(current)];
      } else {
        return [...acc, current];
      }
    }, []);
  }
  
  const nestedArrays = [1, 2, [3, 4], 5, [6, [7, 8, [9]]]];
  const flatArrays = flattenArray(nestedArray);
  
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
