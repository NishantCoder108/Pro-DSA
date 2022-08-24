//Function to return max value that can be put in knapsack of capacity W.

let size = 1000;
let t = Array(size).fill(Array(size).fill(-1));

//   knapsackProb(W, wt, val, n);

function knapsackProb(W, wt, val, n) {
  //Base Condition
  if (W === 0 || n === 0) {
    return 0;
  }

  if (t[n][W] != -1) {
    return t[n][W];
  }

  //Choice Condition
  if (wt[n - 1] > W) {
    return (t[n][W] = knapsackProb(W, wt, val, n - 1));
  } else if (wt[n - 1] <= W) {
    return (t[n][W] = Math.max(
      val[n - 1] + knapsackProb(W - wt[n - 1], wt, val, n - 1),
      knapsackProb(W, wt, val, n - 1)
    ));
  }
}

let n = 58;
let W = 41;
let str1 =
  "57 95 13 29 1 99 34 77 61 23 24 70 73 88 33 61 43 5 41 63 8 67 20 72 98 59 46 58 64 94 97 70 46 81 42 7 1 52 20 54 81 3 73 78 81 11 41 45 18 94 24 82 9 19 59 48 2 72";
let str2 =
  "83 84 85 76 13 87 2 23 33 82 79 100 88 85 91 78 83 44 4 50 11 68 90 88 73 83 46 16 7 35 76 31 40 49 65 2 18 47 55 38 75 58 86 77 96 94 82 92 10 86 54 49 65 44 77 22 81 52";
let ValArr = str1.split(" ").map(Number);
let wtArr = str2.split(" ").map(Number);

console.log(knapsackProb(W, wtArr, ValArr, n));
/**
 * Its Correct output is:

223
 */

//----------Second Method------------
/*
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    function max(a, b) {
      return a > b ? a : b;
    }

    // Returns the maximum value that can
    // be put in a knapsack of capacity W
    function knapSack(W, wt, val, n) {
      let i, w;
      let K = new Array(n + 1);

      // Build table K[][] in bottom up manner
      for (i = 0; i <= n; i++) {
        K[i] = new Array(W + 1);
        for (w = 0; w <= W; w++) {
          if (i == 0 || w == 0) K[i][w] = 0;
          else if (wt[i - 1] <= w)
            K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
          else K[i][w] = K[i - 1][w];
        }
      }

      return K[n][W];
    }

    let res = knapSack(W, wt, val, n);
    return res;
  }
}
*/


/*
 Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In  other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items  respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum  of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick  it (0-1 property).
*/