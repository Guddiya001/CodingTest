/*
console.log(1) 
    setTimeout(function() {
    console.log(2)
    })
    Promise.resolve('success').then(function() {
    console.log(3)
    })
    console.log(4)

    */

    var obj1 = {
        age: 22,
        getAge: function() {
           return this.age;
        }
      }
      var obj2 = obj1.getAge;
 const val =  obj2()

 console.log(obj1.getAge(), obj2, val)

 //pure function