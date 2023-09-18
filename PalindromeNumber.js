/*
Palindrome Check: Write a function to check if a given Number is a palindrome 
(reads the same backward as forward),
ignoring non-alphanumeric characters and considering case-insensitivity.
*/
//const  num  = 1234321

function palindromeNumber(num) {
    let originalnum = num
    let rev = 0

    while (num > 0) {

        rev = rev * 10 + num % 10

        num = Math.floor(num / 10)
    }

    if (originalnum == rev) {
        console.log("THis is palindrome Number")
    } else {
        console.log("THis is not palindrome Number")
    }

}

palindromeNumber(1213)


function isPalindromeNumber(num) {
    const numStr = num.toString();
    const reversedNumStr = numStr.split("").reverse().join("");
    return numStr === reversedNumStr;
}

console.log(isPalindromeNumber(121)); // Output: true
console.log(isPalindromeNumber(454)); // Output: true
console.log(isPalindromeNumber(123)); // Output: false


console.log(`This is <span style="color: red;"> Ashish </span>`)

