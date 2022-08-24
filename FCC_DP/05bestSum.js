//It is similar to howSum , but to find that minimum element summation to targetSum


//m = targetSum
//n = array length

//O(n^m * m)time  | O(m^2)space

function bestSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = bestSum(remainder, numbers);

    if (remainderResult !== null) {

        const combination = [...remainderResult, num]
      if (
        shortestCombination === null ||
        combination.length <  shortestCombination.length
       
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}

//Optimize Version
//O(m^2)space  || O(n * m^2)time

function bestSumDp(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSumDp(remainder, numbers, memo);

    if (remainderResult !== null) {
        const combination = [...remainderResult,num]
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return memo[targetSum];
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5])); 
// console.log(bestSum(300, [7,14]

console.log("----------------------------");
console.log(bestSumDp(7, [2, 3]))
console.log(bestSumDp(7, [5, 3, 4, 7]));
console.log(bestSumDp(7, [2, 4]));
console.log(bestSumDp(8, [2, 3, 5])); 
console.log(bestSumDp(300, [7, 14]));


/*
[ 3, 2, 2 ]
[ 7 ]
null
[ 5, 3 ]
----------------------------
[ 3, 2, 2 ]
[ 7 ]
null
[ 5, 3 ]
null
*/