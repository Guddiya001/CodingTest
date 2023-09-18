const myObject = { x: 1 };
Object.freeze(myObject);

myObject.x = 2; // This will have no effect

console.log(myObject); // Output: { x: 1 }