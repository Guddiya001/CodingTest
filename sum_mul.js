function mul(...a){
    const args = [...a]
    const len =  args.length
    sum = 0;
    if(len >1){
        for(i=0; i<len; i++){
            sum += args[i]
        }
          return sum
    }
    return function (b){ 
         return function (c){
        return a*b*c        
         }
    }
   
   
}
const add = mul(1,3,6,7,3)
const multiple = mul(3)(5)(4)
console.log(add, " -- ", multiple )
const [x,y, ...rest] = [1,3,6,7,8]
console.log(x, y," -- ", ...rest )
