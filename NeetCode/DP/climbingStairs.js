/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n ) {
    /* 
     if(n == 1  || n ==0)return 1
     
     
     if(dp[n] !== undefined){
         return dp[n]
     }
     
     
     dp[n] = climbStairs(n-1   ,dp)+ climbStairs(n-2 ,dp)
     
     return dp[n]
     
     */
     
     //Bottom Up Approach
     
     
     /*
     dp[0] = 1;
     dp[1] = 1;
     
     if(n == 0  || n == 1){
         return 1;
     }
 
     
     for(let i = 2; i<=n ;i++){
         
         dp[i]  = dp[i -1] + dp[i -2]
     }
     
     return dp[n]
     
     */
     
     if(n == 1 || n == 0){
         return 1;
     }
     let curr;
     let prev1 = 1;
     let prev2 = 01;
     
     for(var i = 2; i<= n ; i++){
         curr = prev1 + prev2;
         prev2 = prev1;
         prev1 = curr;
         
         
     }
     
     return curr
 };



 /**
  You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
  */