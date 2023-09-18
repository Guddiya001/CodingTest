
// array Sort 
let arr = ['81', '27', '1', '44', '309', '44', '90', '1', '87', '09', '4', '22']

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (Number(arr[j]) > Number(arr[j + 1])) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
   // console.log(`arr[j] ${arr[i]} arr[j+1] ${arr[j+1]}`);

}

console.log(arr);

// from cpt 

const myArray = ['81', '27', '1', '44', '309', '44', '90', '1', '87', '09', '4', '22'];

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (parseInt(arr[j], 10) > parseInt(arr[j + 1], 10)) {
                // Swap the elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const sortedArray = bubbleSort(myArray);
//console.log(sortedArray);

