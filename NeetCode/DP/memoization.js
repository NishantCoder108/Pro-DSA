/**
 * DP problem solved by three methods
 *   1.Memoization
 *   2.Top -Down
 *   3.Bottom -Up
 */

//Fibonacci by Memoization

function findFib(n, dp = {}) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (dp[n] !== undefined) {
    return dp[n];
  }

  dp[n] = findFib(n - 1, dp) + findFib(n - 2, dp);
  return dp[n];
}

console.log(findFib(5));



//Top Down Method

function findFib2(n,dp){
 
 dp[0] = 0
 dp[1] = 1
    for(let i =2; i<=n; i++){

        dp[i] = dp[i-1] + dp[i -2] 
    }

   console.log(dp)
    return dp[n ]
}

let n = 5
let dp = new Array(n +1).fill(-1)
console.log(findFib2(5,dp))