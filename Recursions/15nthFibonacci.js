//Time O(2^n) | Space O(n)

function getNthFib(n) {
  // This code is in Iterative way

  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}

//O(n)time | O(n)space
//Here ,we created hashtable for memoizing ,it will not run for duplicate
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  // Write your code here.
  if (n in memoize) {
    //in ,mostly used for key finding
    // console.log(memoize[n])
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    console.log(n, memoize[n]);
    return memoize[n];
  }
}

//O(n) time | O(1)space
function getNthFib(n) {
  // This code is in Iterative way

  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Do not edit the line below.

