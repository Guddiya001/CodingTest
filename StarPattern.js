let str =''
for(let i =0 ; i<=5; i++){
  for(let j =0 ; j<=i; j++){
  str += 'X'
  }
 
 str += '\n'
}

 console.log(str)

 /*
X         i = 0, j =0
XX        i = 1, j =0,1
XXX       i = 2, j =0,1,2
XXXX      i = 3, j =0,1,2,3
XXXXX
XXXXXX
 
 
 */