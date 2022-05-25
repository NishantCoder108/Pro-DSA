class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

//     a
//    /  \
//   b    c
//  / \  / \
// d   e f  g

console.log(a)
/** 
 Node {
  val: 'a',
  left: Node {
    val: 'b',
    left: Node { val: 'd', left: null, right: null },
    right: Node { val: 'e', left: null, right: null }
  },
  right: Node {
    val: 'c',
    left: Node { val: 'f', left: null, right: null },
    right: Node { val: 'g', left: null, right: null }
  }
}
*/




//Defth-First-Search
function dfs(root){

    if(root === null)return [];

   const leftVal = dfs(root.left);
   const rightVal = dfs(root.right);

   return [root.val , ...leftVal, ...rightVal]
}

console.log(dfs(a))//here a is root ,all node connect with a
/** 
[
  'a', 'b', 'd',
  'e', 'c', 'f',
  'g'
]
*/