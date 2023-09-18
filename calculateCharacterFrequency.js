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

const frequency  = calculateCharacterFrequency("Ashish Singh")

console.log(frequency)
