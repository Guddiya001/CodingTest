/*
Find the Maximum Value: Write a function to find the maximum value in an array of numbers 
without using the built-in max() method.
*/


const arr = [2,5,56,89,34,80,345,678,234,3,4,5] 

let max = arr[0]
for(let i =0; i< arr.length; i++){

    if(max < arr[i]){

        max = arr[i]
    }
}

console.log(max)