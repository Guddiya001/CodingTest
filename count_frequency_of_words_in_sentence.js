// count frequency of words accurance and total frequency in sentences

const data = 'India is a diverse and vibrant country located in South Asia. With its rich history, stunning landscapes, and bustling cities, India offers a unique blend of culture, traditions, and experiences. From the iconic Taj Mahal to the spiritual city of Varanasi, India is home to countless treasures waiting to be explored. The country is also known for its delicious cuisine, which varies from region to region and offers a tantalizing array of flavors and spices. Whether you are seeking adventure in the Himalayas, exploring ancient temples in Rajasthan, or immersing yourself in the chaos of Mumbai, India has something for everyone.'

let count ={}
const output  = data.split(" ").map(
  s => {
    count[s] =(count[s] || 0) +1 
    // console.log(s)
  }
  )
  
  console.log(count) // frequency of words accurance
  
  let num = 0
  
  for(let it in count){
    
  num +=  count[it]
  }
  
    console.log(num)   //total frequency
/*
Output:

{
  India: 4,
  is: 3,
  a: 3,
  diverse: 1,
  and: 5,
  vibrant: 1,
  country: 2,
  located: 1,
  in: 4,
  South: 1,
  'Asia.': 1,
  With: 1,
  its: 2,
  rich: 1,
  'history,': 1,
  stunning: 1,
  'landscapes,': 1,
  bustling: 1,
  'cities,': 1,
  offers: 2,
  unique: 1,
  blend: 1,
  of: 4,
  'culture,': 1,
  'traditions,': 1,
  'experiences.': 1,
  From: 1,
  the: 4,
  iconic: 1,
  Taj: 1,
  Mahal: 1,
  to: 4,
  spiritual: 1,
  city: 1,
  'Varanasi,': 1,
  home: 1,
  countless: 1,
  treasures: 1,
  waiting: 1,
  be: 1,
  'explored.': 1,
  The: 1,
  also: 1,
  known: 1,
  for: 2,
  delicious: 1,
  'cuisine,': 1,
  which: 1,
  varies: 1,
  from: 1,
  region: 2,
  tantalizing: 1,
  array: 1,
  flavors: 1,
  'spices.': 1,
  Whether: 1,
  you: 1,
  are: 1,
  seeking: 1,
  adventure: 1,
  'Himalayas,': 1,
  exploring: 1,
  ancient: 1,
  temples: 1,
  'Rajasthan,': 1,
  or: 1,
  immersing: 1,
  yourself: 1,
  chaos: 1,
  'Mumbai,': 1,
  has: 1,
  something: 1,
  'everyone.': 1
}
101

*/