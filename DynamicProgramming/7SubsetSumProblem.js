/**
 Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.
Example:

Input:  set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output:  True  //There is a subset (4, 5) with sum 9.
 */

let arr = [ 4,3,5,2 ];
let sum = 14
let n = 4
//---first TEst Case---
// let arr = [3, 34, 4, 12, 5, 2];
// let sum = 9;
// let n = 6


let t = Array(arr.length + 1).fill(Array(sum + 1).fill(0));

// console.log(t)
for (let i = 0; i < n +1; i++) {
  for (let j = 0; j < sum + 1; j++) {
    if (i == 0) {
      t[i][j] = false;
      continue
    }

    if (j == 0) {
      t[i][j] = true;
   
    }

    //sum --->j , similarty

    if (arr[i - 1] <= j) {
        let k = t[i - 1][j];
        // console.log('K',k)
     let l =  t[i - 1][j - arr[i - 1]] || k;
    //   console.log(l)
      t[i][j] = l
    } else {
      t[i][j] = t[i - 1][j];
    }

    // console.log('------------')
    
  }
}
// console.log('matrix ', t)
console.log(t[n][sum]);







//-------------------Checking for differece is equal to 0

let diff = Number.MAX_VALUE;
      
// Find the largest j such that dp[n][j]
// is true where j loops from sum/2 t0 0
for (let j=Math.floor(sum/2); j>=0; j--)
{
    // Find the
    console.log(t)
    console.log("n",n)
    console.log("j",j)
    console.log("sum",sum)
    if (t[n][j] == true)
    {
        diff = sum-2*j;
        break;
    }
}
console.log(diff);
