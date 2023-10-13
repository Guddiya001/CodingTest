//assume this json have length of 100, and with batch of 10 process at time synchronously


// If you want to process this JSON array in batches of 10 items at a time, and you want to do this synchronously (i.e., wait for each batch to complete before processing the next), you can use JavaScript's Array.prototype.slice() method to create batches and then process each batch using a loop. Here's an example of how you can achieve this:
const countriesList = [
  // Your array of countries
  // (The same data as in your example)
];

const batchSize = 10;

function processBatch(startIndex) {
   const endIndex = Math.min(startIndex + batchSize, countriesList.length);
   const batch = countriesList.slice(startIndex, endIndex);

   // Process the batch synchronously
   batch.forEach(country => {
       // Your processing logic for each country goes here
       console.log(`Processing country: ${country.Title}`);
   });

   if (endIndex < countriesList.length) {
       // If there are more items to process, call processBatch again with the next batch
       setTimeout(() => processBatch(endIndex), 0);
   } else {
       // All batches have been processed
       console.log("All batches have been processed.");
   }
}

// Start processing with the first batch
processBatch(0);
























/*
const countriesList = [
   {
      "id": 37,
      "Title": "Romania",
      "CountryCode": 14,
      "Population": 14034521,
   },
   {
      "id": 28,
      "Title": "Sweden",
      "CountryCode": 9,
      "Population": 4214021,
   },
   {
      "id": 6,
      "Title": "USA",
      "CountryCode": 3,
      "Population": 1824021,
   },
   {
      "id": 18,
      "Title": "England",
      "CountryCode": 35,
      "Population": 1332021,
   }
]

let length = 100
let intiallength = 10
setTimeout(()=>{
  10+10
},3000)

async function dataProcess(){
  
  await new promise((res, rej)=>{


  })
  
   await new promise((res, rej)=>{
    setTimeout(function() {
      // data procesing logic
      
    }, 2000);
  })
  
   await new promise((res, rej)=>{
    setTimeout(function() {
      // data procesing logic
      
    }, 2000);
  })
  
   await new promise((res, rej)=>{
    setTimeout(function() {
      // data procesing logic
      
    }, 2000);
  })
  
}
  
  
}
}
@/

