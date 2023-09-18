
let data = [
    { id: 1, name: "meet" },
    { id: 2, name: "raj" },
    { id: 1, name: "hari" },
    { id: 3, name: "hari" },
    { id: 2, name: "ram" }
].reduce((acc, item) => {
    //console.log(it)
    acc.push({ id:item.id, name: item.name}) 
    return acc
}, []);


console.log(data)

/*
const data = [
    { id: 1, name: "meet" },
    { id: 2, name: "raj" },
    { id: 1, name: "hari" },
    { id: 3, name: "hari" },
    { id: 2, name: "ram" }
  ];
  
  const uniqueData = data.reduce((acc, obj) => {
    const existingObj = acc.find(item => item.id === obj.id);
    if (existingObj) {
      // If an object with the same ID exists, update the name
      existingObj.name = obj.name;
    } else {
      // If no object with the same ID exists, add it to the array
      acc.push({ id: obj.id, name: obj.name });
    }
    return acc;
  }, []);
  
  console.log(uniqueData);
  */