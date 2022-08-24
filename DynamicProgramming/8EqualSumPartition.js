/*
Partition problem is to determine whether a given set can be partitioned into two subsets such that the sum of elements in both subsets is same.
Examples:

arr[] = {1, 5, 11, 5}
Output: true 
The array can be partitioned as {1, 5, 5} and {11}
*/

function equalSumPartition(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum % 2 !== 0) {
    return false;
  } else {
    //if Even
    return subsetSumProblem(arr, sum /2);
  }
}



function subsetSumProblem(arr,sum){
    let n = arr.length;
    let t = Array(n+1).fill(Array(sum + 1).fill(0));

    for(let i= 0; i< n+1; i++){
        for(let j= 0; j< sum + 1; j++){
            if(i === 0){
                t[i][j] = false;
                continue;
            }

            if(j === 0){
                t[i][j] = true;
                // continue;
            }


            if(arr[i - 1]  <= j){
                t[i][j] = t[i - 1][j - arr[i - 1]]  ||  t[i -1][j]
            }else{
                t[i][j] = t[i - 1][j]
            }
        }
    }

    return t[n][sum]
}



let arr = [1, 5, 11, 5,2]
console.log(equalSumPartition(arr))






//----------------------------------------------------------------------------------------


//----Checking its difference is equal to 0 , minimum subset  sum difference--------
let sum = 24;
let diff = Number.MAX_VALUE;

for(let j = Math.floor(sum /2); j >= 0; j--){


    if(subsetSumProblem(arr,sum/2) === true){
        diff = sum - 2*j
        break;
    }


}
console.log(diff)

/**
 * Note :- We can say , if array have equal subset sum , absolutely its sum will be 0 ; Otherwise minize
 */