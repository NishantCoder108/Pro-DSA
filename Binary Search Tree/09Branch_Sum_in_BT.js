/**
 * Write a function that takes in a Binary Tree and return a list of its branch
 * sums ordered from leftmost branch sum to righmost branch sum
 *
 * tree =    1
 *          /  \
 *        2     3
 *      /  \   /  \
 *     4   5  6    7
 *    / \  /
 *   8   9 10
 *
 * [15, 16,18, 10, 11]
 * 15 ==> 1 + 2 + 4 + 8
 * 16 ==> 1 + 2 + 4 + 9
 * 18 ==> 1 + 2 + 5 + 10
 * 10 ==> 1 + 3 + 6
 * 11 ==> 1 + 3 + 7
 */

// This is the class of the input root.
// This is Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Input Data is taken
let a = new Node(10);
let b = new Node(5);
let c = new Node(15);
let d = new Node(2);
let e = new Node(5);
let f = new Node(13);
let g = new Node(22);

//Tree making from input data
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

//O(n) time | O(n)space
//branc sums function
function branchSums(root) {
  const sums = [];
  //Helper function of branch sum
  calculateBranchSum(root, 0, sums);

  return sums;
}

//Helper Function ,it takes three parameter ,
// node ,running sum previouslycompleted ,sum
function calculateBranchSum(node, runningSum, sums) {
  if (!node) return;
  //node equal to null then return
  const newRunningSum = runningSum + node.value;
  //previous value + latest node value
  if (!node.left && !node.right) {
    //If node.left === null and node.right === null
    // then push newRunningSum in sums
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSum(node.left, newRunningSum, sums);
  //It move leftmost branch sum to rightmost sum
  calculateBranchSum(node.right, newRunningSum, sums);
  //If leftmost branch both have null then it will push to sum
  //And also move to right branch
}

console.log(branchSums(a)); //[ 17, 20, 38, 47 ]
