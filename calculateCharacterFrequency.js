function calculateCharacterFrequency(inputValue){
    const characterFrequency ={}
    for(char of inputValue)
    {
        if(characterFrequency[char]){
            characterFrequency[char]++
        }
        else if(char !==' '){
            characterFrequency[char] =1
        }
    }

    return characterFrequency
}

//const frequency  = calculateCharacterFrequency("Ashish Singh")
const frequency  = calculateCharacterFrequency([1,23,4,556,7,7,1,1,23,4,5,66,77,66])

console.log(frequency)
