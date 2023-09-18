function Culculator(initialValue){

    this.value = initialValue

    this.add = (num) =>{

         this.value += num
         return this;
    }

    this.sub = (num) =>{

         this.value -= num
        return this
    }

    this.mul = (num) =>{
        this.value *= num

        return this
    }

    this.val = ()=>{
        return this.value;
    }
}



const result = new Culculator(0)
.add(5)
.add(6)
.sub(7)
.add(7)
.mul(10)
.val();

console.log(result);