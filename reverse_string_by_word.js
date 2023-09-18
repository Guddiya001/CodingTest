/*
function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  console.log(words)
  var result = "";
  for (var i = 0; i < words.length; i++) {
     result += words[i].split('').reverse().join('') + " ";
  }
  return result
}
console.log(reverseInPlace("abd fhe kdj Hello"))

*/

var input = "abd fhe kdj";
var output = input.split( " " ).map(  //split into words and iterate via map
     s => s.split("").reverse().join( "" )  //split individual words into characters and then reverse the array of character and join it back
).join( " " ); //join the individual words


console.log(output)         