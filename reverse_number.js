// reverse number
let num = 123456789;

function reverseNumber(num) {

    let fnumber = 0;
    let revs;

    while (num > 0) {

        revs = num % 10;

        fnumber = fnumber * 10 + revs

        num = Math.floor(num / 10)

    }
    return fnumber

}

const data = reverseNumber(num)

console.log(`Reverse a number is -- ${data}`)


// an other way reverse a number

let result = 0;
let number = 123456789;

result = Number(String(number).split('').reverse().join(''));

console.log("Reversed number is : "+result);


// Arrow function for reversing the number
const reverseNumber = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)

console.log(reverseNumber(12345))