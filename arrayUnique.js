function unique(arrayData) {
  const store = [];
  arrayData.forEach((ar) => {
    if (store.indexOf(ar) === -1) {
      store.push(ar);
      console.log("ar", ar);
    }
  });

  return store;
}


function uniqueByCustom(arrayData) {
  const store = [];
  const temp ={}
  arrayData.forEach((ar) => {
    

    if (temp[ar] !== 1) {
      temp[ar] = (temp[ar] || 0) +1
      store.push(ar);
     }
  });
  console.log("temp", temp);
  return store;
}

console.log(uniqueByCustom(arr));