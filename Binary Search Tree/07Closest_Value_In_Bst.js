/**
 * Find Closest Value in Binary Search Tree
 */

//O(log(n)) time | O(log(n)) space    Best Case
//O(n) time | O(n) space    Worst Case

//Solved By Recursive Way
//Function of Find Closest Value in Binary Search Tree
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
  //we pass three arguments ,tree , target value, tree uppermost value
}

//Helper function of finding closest value
function findClosestValueInBstHelper(tree, target, closet) {
  if (tree === null) return closet;
  //if tree is equal to null ,return closest value

  if (Math.abs(target - closet) > Math.abs(target - tree.value)) {
    //if(target value - closet) is greater than (target value - tree uppermost value)
    //we must do , closest = tree uppermost value

    closet = tree.value;
    //Closest is updated
  }

  if (target < tree.value) {
    //if target value is less than tree uppermost value
    //It will move to left side of tree
    return findClosestValueInBstHelper(tree.left, target, closet);
    //Here we pass tree left value ,target and closet
  } else if (target > tree.value) {
    //If target is greater than  tree value
    //it will move to right side of tree
    return findClosestValueInBstHelper(tree.right, target, closet);
  } else {
    //finally return closest ,they will be result
    return closet;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a1 = new BST(10);
let b1 = new BST(5);
let c1 = new BST(15);
let d1 = new BST(2);
let e1 = new BST(5);
let f1 = new BST(13);
let g1 = new BST(22);
let h1 = new BST(1);
let i1 = new BST(14);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = g1;
d1.left = h1;
f1.right = i1;

// Do not edit the line below.
// console.log(a1);

console.log(findClosestValueInBst(a1, 12));

//------------ITERATIVE WAY--------------------------------------------------

////O(log(n)) time | O(1) space    Best Case
//O(n) time | O(1) space    Worst Case
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, tree.value);
}
function findClosestValueInBstHelper(tree, target, closest) {
  let currNode = tree;
  while (currNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
      closest = currNode.value;
    }
    if (target < currNode.value) {
      currNode = currNode.left;
    } else if (target > currNode.value) {
      currNode = currNode.right;
    } else {
      break;
    }
  }

  return closest;
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
