// 1St Method
//O(nlogn)time | O(1)space
function findThreeLargestNumbers(array) {
  // Write your code here.

  array.sort((a, b) => b - a);
  return [array[2], array[1], array[0]];
}







//   2nd Method
//O(n) time | O(1)space
function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
