/*
FizzBuzz: Print numbers from 1 to N, but for multiples of 3, print "Fizz" instead of the number,
 and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."
 */
let str =''

 for(let i =1; i<100; i++){

      str += i % 15==0 ? i+" FizzBuzz " : i %5==0? i+" Buzz " : i % 3==0 ? i+" Fizz " : '';
 }

 console.log(str)