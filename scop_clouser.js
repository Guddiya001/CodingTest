function createBase(base){

return function (N){
	return N + base;
}

}

addsix = createBase(6)
addsix(10)
addsix(21)


// interviewer: what will the following code output?
const arrs = [10, 12, 15, 21];
for (var i = 0; i < arrs.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local + ' and values -- ', arr[i_local]);
    }
  }(i), 3000);
}