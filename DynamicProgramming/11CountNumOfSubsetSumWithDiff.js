/**
 Given an array Arr[] and a difference diff, find the number of subsets that array can be divided so that each the difference between the two subset is the given diff.

Example1:
Input:
Arr[] : 1,1,2,3
diff: 1
Output: 3 . 
 */

function countNumOfSubsetSumWithDiff(arr, diff) {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  //s1 + s2 = S(total sum of elements)
  //s1 - s2 = diff(given)
  //equate both
  //s1 = (diff + S)/2
  if ((sum + diff) % 2 != 0) return 0;
  let s1 = (diff + sum) / 2;

  return countNumberOfSubsetSum(arr, s1);

  ///---Other Way tryig----
  // let count = 0;
  // for (let j = Math.floor(sum / 2); j >= 0; j--) {
  //   if (subsetSum(arr, s1) === true && sum - 2 * s1 == diff) {
  //     count += 1;
  //   }
  // }

  // return count;
}

function countNumberOfSubsetSum(arr, sum) {
  let n = arr.length;

  let t = Array(1000).fill(Array(1000).fill(false));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) {
        t[i][j] = 0;
        continue;
      }
      if (j >= 0) {
        t[i][j] = 1;
      }
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j] + t[i - 1][j - arr[i - 1]];
      } else if (arr[i-1] > j || arr[i-1] == 0){
        // t[i][j] = t[i - 1][j];
        

      t[i][j] = t[i-1][j];
      }
    }
  }

  return t[n][sum];
}

let arr = [1, 1, 2, 3];
let diff = 1;

output: 3;
console.log("skdfjskdf--------", countNumOfSubsetSumWithDiff(arr, diff));

// console.log('countNumberOfSubsetSum',countNumberOfSubsetSum(arr, 7))

function subsetSum(arr, sum) {
  let n = arr.length;

  let t = Array(n + 1).fill(Array(sum + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) {
        t[i][j] = false;
        continue;
      }

      if (j == 0) {
        t[i][j] = true;
      }

      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][sum];
}

//-------Ancohter tyry by youtube code-----
function findTargetSumWays(arr, target) {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  //For below if condition,
  //sum<abs(target), consider test case - nums: [100], target: -200
  //(target+sum) % 2 != 0, consider test case - nums: [7,9,3,8,0,2,4,8,3,9], its sum = 53 and target: 0, there could not be any 26.5 in integer array.

  if (sum < Math.abs(target) || (target + sum) % 2 != 0) return 0;

  //S1 is newTarget
  let newTarget = (sum - target) / 2;
  return countSubsetsWithSumTarget(arr, newTarget);
}

//Count subsets with sum S1
function countSubsetsWithSumTarget(a, target) {
  let n = a.length,
    w = target;
  let t = Array(n + 1).fill(Array(w + 1).fill(0));

  //Initialization
  for (let i = 0; i < w + 1; i++) t[0][i] = 0;
  for (let j = 0; j < n + 1; j++) t[j][0] = 1;

  //Knapsack 01
  for (let i = 1; i < n + 1; i++) {
    //j starts from 0, becuase 0s are considered valid in this problem, e.g - nums: [0,0,0,0], target: 0, ans = 16
    for (let j = 0; j < w + 1; j++) {
      if (a[i - 1] <= j) {
        t[i][j] = t[i - 1][j - a[i - 1]] + t[i - 1][j];
      }
       else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][w];
}

// console.log(findTargetSumWays(arr, diff));
