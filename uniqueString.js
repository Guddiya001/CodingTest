function removeDuplicates(str) {
    let uniqueChars = '';
    
    for (let char of str) {
      if (!uniqueChars.includes(char)) {
        uniqueChars += char;
      }
    }
    
    return uniqueChars;
  }
  
  const inputStr = "aaaaaaabbbbbbbccccccddddd";
  const result = removeDuplicates(inputStr);
  console.log(result); // Output: "abcd"
  