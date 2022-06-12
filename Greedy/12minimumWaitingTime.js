
let queries = [3, 2, 1, 2, 6]
output: 17

function minimumWaitingTime(queries) {
    // Write your code here.
    //Greedy Algorithm
  
    queries.sort((a,b) => a -b);
    let totalWaitingTime = 0;
    //In starting waiting time is zero
  
    for(let idx = 0; idx < queries.length; idx++){
      //iterating  the whole loop of queries
      const duration = queries[idx];
      //finding duration of every query
      const queriesLeft = queries.length - (idx + 1);
      //how much queries left in queryArray
      totalWaitingTime += duration * queriesLeft;
      //finally ,previous total waiting time , we will add
      //queries left multiply with duration
    }
    
    return totalWaitingTime;
  }
  
console.log(minimumWaitingTime(queries))
