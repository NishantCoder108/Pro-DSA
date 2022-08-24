//I have 2D arrays , I want to go from TOP LEFT to RIGHT BOTTOM
//How many ways to reach right bottom i.e. end

function gridTraveler(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m, n - 1) + gridTraveler(m - 1, n);
}

// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(5, 6));
// console.log(gridTraveler(18,18))

//Memoize
//DP Use

const gridTravelerDP = (m, n, memo = {}) => {
  const key = m + "," + n;
//   console.log(key)
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravelerDP(m - 1, n, memo) + gridTravelerDP(m, n - 1, memo);

  return memo[key];
};

console.log(gridTravelerDP(2, 3));
console.log(gridTravelerDP(3, 3));
console.log(gridTravelerDP(5, 6));
console.log(gridTravelerDP(18, 18));



console.log(`${5,2}`  == `${2,5}`)