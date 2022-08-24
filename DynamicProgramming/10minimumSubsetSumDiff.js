/*
 Sum of subset differences
Given a set of integers, the task is to divide it into two sets S1 and S2 such that the absolute difference between their sums is minimum.
If there is a set S with n elements, then if we assume Subset1 has m elements, Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.

Example:
Input:  arr[] = {1, 6, 11, 5} 
Output: 1
Explanation:
Subset1 = {1, 5, 6}, sum of Subset1 = 12 
Subset2 = {11}, sum of Subset2 = 11 
*/


//First Method ---------

function minDifference(arr, n) {
  // Your code goes here
  let t_sum = 0;
  for (let i = 0; i < n; i++) {
    t_sum += arr[i];
  }

  let sum = Math.floor(t_sum / 2);

  let t = Array(arr.length + 1).fill(Array(sum + 1).fill(0));
  //    console.log(t[n+1][sum+1]) ;

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) t[i][j] = false;
      if (j == 0) t[i][j] = true;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else if (arr[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  let mx = Number.MIN_VALUE;
  for (let k = 0; k < sum + 1; k++) {
    if (t[n][k] == true) mx = Math.max(mx, k);
  }

  let d = t_sum - 2 * mx;

  return d;
}
let arr = [1, 6, 11, 5];
console.log(minDifference(arr, 4));




//-----------------------------------------------------------
//---Other Method 2



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


function minimumSubsetSumDiff(arr){
   let tsum = 0;

   for(let i=0; i<arr.length;i++){
    tsum += arr[i]
   }

   sum = Math.floor(tsum / 2 );

let diff = Number.MAX_VALUE;

for(let j = sum; j >= 0; j--){


    if(subsetSumProblem(arr,sum) === true){
        diff = tsum - 2*j   //here we minus , by total sum 
        break;
    }


}
return diff; 
}


console.log(minimumSubsetSumDiff(arr));