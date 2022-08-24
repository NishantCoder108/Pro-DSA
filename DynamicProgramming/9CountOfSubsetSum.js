/*
Given an array arr[] of length N and an integer X, the task is to find the number of subsets with sum equal to X.
Example:

Input: arr[] = {1, 2, 3, 3}, X = 6
Output: 3
All the possible subsets are {1, 2, 3},
{1, 2, 3} and {3, 3}
*/

//here X --->sum

function countOfSubsetSum(arr, X) {
  let n = arr.length;
  let t = Array(n + 1).fill(Array(X + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < X + 1; j++) {
      if (i === 0) {
        t[i][j] = 0;
        continue;
      }

       if (j >=0) {
        t[i][j] = 1;
        
      }

      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j] + t[i - 1][j - arr[i - 1]];
      } else {
        t[i][j] = t[i - 1][j];
      }

    //   console.log(t)
    }
  }

  return t[n][X];
}

let arr = [1, 2, 3, 3];
let X = 6;

// let arr = [1, 1, 2, 3];
// let X = 4
console.log(countOfSubsetSum(arr, X));
