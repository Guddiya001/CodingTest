/* 

Create a function that return array with multiplaction with each level  as given.

Certainly! Here's the JavaScript code for multiplying each element in the nested array by its respective level:

input [1,2, [4,3,5,[2,4, [2,3,4] ]]]

outPut [1,2, [8,6,10,[6,12, [8,12,16] ]]]
*/ 

function multiplyNestedArrayByLevel(arr, level = 1) {
    return arr.map(item => Array.isArray(item) ? multiplyNestedArrayByLevel(item, level + 1) : item * level);
  }
  
 const inputArray = [1, 2, [8, 6, 10, [6, 12, [8, 12, 16,[3,4] ]]]];
 const outputArray = multiplyNestedArrayByLevel(inputArray);
  
 console.log(outputArray);

  /**
   * output :-
   * 
  ▶(3) [1, 2, Array(4)]
 0: 1
 1: 2
▶2: Array(4)
 0: 2
 2: 2016
 1: 1
▶3: Array(3)
 0: 18
 1: 36
▶2: Array(4)
 0: 32
 1: 48
 2: 64
▶3: Array(2)
 0: 15
 1: 20
  
  */

 /*

 *  this is not work with foreach
function multiplyingByArraywithLevel(arr, level=1){

    arr.forEach(el => {
        if(Array.isArray(el)){
            multiplyingByArraywithLevel(el, level+1, val)
        }else{
           val.push( el * level) 
           
        }
    });
   // return val;
    console.log(val);


   return arr.map((array)=> Array.isArray(array)?multiplyingByArraywithLevel(array, level+1) : array*level )

}

const inputArray = [1, 2, [8, 6, 10, [6, 12, [8, 12, 16,[3,4] ]]]];
const outputArray = multiplyingByArraywithLevel(inputArray);

console.log(outputArray);

*/