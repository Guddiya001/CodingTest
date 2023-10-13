/*
console.log(1) 
    setTimeout(function() {
    console.log(2)
    })
    Promise.resolve('success').then(function() {
    console.log(3)
    })
    console.log(4)

   

    var obj1 = {
        age: 22,
        getAge: function() {
           return this.age;
        }
      }
      var obj2 = obj1.getAge;
 const val =  obj2()

 console.log(obj1.getAge(), obj2, )

 //pure function
let y =30

 function example() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;
}

example();

// {
//   console.log(z); // ReferenceError: Cannot access 'z' before initialization
//   const z = 30;
// }
 */

function increment(){
  var counter = 1;
  if(counter){
let counter = counter + 1;
  }
  console.log(counter); // ReferenceError: Cannot access 'counter' before initialization
}

increment();