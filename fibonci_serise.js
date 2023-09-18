
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let first = 0;
let second = 1;
console.log(first + ", " + second);
let third = 0;
for (let i = 0; i < 15; i++) {
  third = first + second;
  first = second;
  second = third;

  // console.log(first +", "+ second +" ,"+ third);

  console.log(third);
}
