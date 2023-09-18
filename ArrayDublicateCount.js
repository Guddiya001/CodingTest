const arr = [1, 2, 3, 4, 1, 9, 3];

let count = {};

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] = (count[arr[i]] || 0) + 1;
}

// count Dublicate
// output { '1': 2, '2': 1, '3': 2, '4': 1, '9': 1 }
console.log(count);

// filter count Dublicate only
// output { '1':2, 3:2}
for (const it in count) {
  if(count[it]> 1){
    console.log(it, count[it]);
  }
  
}


// arr.forEach(function (i) {
//   count[i] = (count[i] || 0) + 1;
// });
//console.log(unique(arr));
