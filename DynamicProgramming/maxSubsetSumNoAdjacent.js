let array = [75, 105, 120, 75, 90, 135]
output: 330 // 75 + 120 + 135

//array must be +ve integers , return maximum sum of non-adjacent elements in the array


// Method 1
// O(n)time | O(n)space
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
  
    if(!array.length) return 0;
    if(array.length === 1) return array[0];
  
    const maxSums = array.slice();//it will just the copy of array
    maxSums[1] = Math.max(array[0],array[1]);
  
    for(let i= 2; i < array.length; i++){
      maxSums[i] = Math.max(maxSums[i - 1] ,maxSums[i - 2]  + array[i])
    }
  
    return maxSums[maxSums.length - 1]
    
  }
  
  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

  


//   Method 2
// O(n) time | O(1)space
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
  
    if(!array.length )return 0;
    if(array.length ===1 )return array[0];
  
    let second = array[0];
    let first =Math.max(array[0] , array[1]);
  
    for(let i = 2; i< array.length; i++){
      const current =Math.max(first,second + array[i]);
      second = first;
      first = current;
    }
  
    return first;
  }
  
  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

  

//   Method 3
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    for(let i =0; i < array.length; i++){
      if( i < 2) continue;
  
      else{
        if(i - 3   < 0) array[i] = array[i - 2] + array[i];
        else{
          let previousMax = Math.max(array[i - 2] , array[i -3])
          array[i] = previousMax + array[i]
        }
      }
    }
    let index = array.length - 1;
    return array.length === 0 ? 0 : array.length === 1 ?  array[0] : Math.max(array[index], array[index - 1])
  }
  
  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
  