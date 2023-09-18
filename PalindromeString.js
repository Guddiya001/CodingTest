/*
Palindrome Check: Write a function to check if a given string is a palindrome 
(reads the same backward as forward),
ignoring non-alphanumeric characters and considering case-insensitivity.
*/

const str = "ababa"
 
const strRev = str.split("").reverse().join("")
// console.log(strRev==str)

 function strReverse(str){
    let strng = '' 
     for(let i = str.length-1 ; i >=0 ; i--){
        strng += str[i]
     }

     console.log(strng, str)
     if(str == strng){
        return true
     }
     return false
 }

 console.log(strReverse("ababa"))