/**
 * Search the Target Value in Binary Search Tree
 * Present or Not
 */

class Node {
    //Node constructor for taking Input
  constructor(val, left, right) {
    this.val = val;
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

//Target Search Function
//O(logn) time | O(1) space
function targetSearch(target, ac) {
  let root = ac;
  if (root === null) return;

  while (root !== null) {
      //till going on ,when root is not equal to null
    if (target < root.val) {
        //when target value is less than from root value,
        //move to left
      root = root.left;

    } else if (target > root.val) {
        //target value is greater than root val then 
        //move to right
      root = root.right;
    } else {
        //Otherwise return true,they will meet
      return true;
    }
  }
  return false;
}

console.log(targetSearch(25, a));
