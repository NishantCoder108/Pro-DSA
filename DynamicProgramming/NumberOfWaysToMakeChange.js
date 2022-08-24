//Given Array is distinct positive integers representing coin denominations
//they are non-negative integer
// O(nd )time | O(n )space
let n = 6;
denoms = [1, 5];
output: 2; // 1 x 1 + 1 x 5  and 6 x 1

function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}

console.log(numberOfWaysToMakeChange(n ,denoms))