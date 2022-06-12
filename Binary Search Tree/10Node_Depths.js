/**
 * The Distance between a node in a Binary Tree and tree's root is called Node's Depth
 * Write a function that takes in a Binary tree and return the sum of its node's depths
 * Each Binary Tree node has an integer value , a left child node ,and right child node
 * Children node can either be Binary Tree nodes themselves or null
 *
 *
 * tree =   1
 *         / \
 *       2    3
 *      / \  / \
 *     4  5 6   7
 *    / \
 *   8   9
 *
 *
 * Sample Output :  16
 *
 * The depth of node with value 2 is 1
 * The depth of node with value 3 is 1
 * The depth of node with value 4 is 2
 * The depth of node with value 5 is 2
 * so on...
 * Summing all of these depths yields 16
 */

//Method 1
//By Recursive Way

// O(n) time  | O(h) space where n = no. of nodes , h = height of bt

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

// Method 2
//Iterative Way
// O(n)time | O(h)space

function nodeDepthsI(root) {
  let sumOfDepth = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;

    sumOfDepth += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepth;
}
