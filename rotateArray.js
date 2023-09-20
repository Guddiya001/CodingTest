function rotateArray(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a new array with swapped rows and columns
  const rotatedMatrix = [];
  for (let i = 0; i < cols; i++) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < rows; j++) {
      rotatedMatrix[i][j] = matrix[j][i];
    }
  }

  return rotatedMatrix;
}

// Original array
const originalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Rotate the array
const rotatedArray = rotateArray(originalArray);

// Output the rotated array
console.log(rotatedArray);
//[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]