const str = "afafafgsdgsdgs"

//largest substing that should not repeated chatater


function substingNotRepeeted(s){
  let maxlength =0;
  let start = 0;
  let longestSubstring ="";
  let currentSubsting =""
  const charIndex = new Map()
  
  for(let end =0; end <s.length; end++){
    char = s[end];
  
  
  if(charIndex.has(char)){
    start = Math.max(start, charIndex.get(char) +1)
    currentSubsting = s.substring(start, end)
  }else{
    currentSubsting += char
  }
  
  
  
  charIndex.set(char, end);

  if(currentSubsting.length >maxlength){
    maxlength = currentSubsting.length;
    longestSubstring = currentSubsting
  }
  }
  return longestSubstring
  
}

const substr = substingNotRepeeted(str)

console.log(substr) // output : agsd