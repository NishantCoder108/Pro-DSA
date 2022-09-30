function isBst (root){
    if(root == null) return true;


    if(root.val < max  && root.val > min){
        return isBst(root.left ,min ,root.val) && isBst(root.right , root.val, max)
    }else{
        return false
    }
}




/**
 * 
 * level order traversal bst
 * __________________________
 * 
 * 
 * 
 * step1 : level order
 *         first create queue
 *              we added root 
 * 
 *        until queue is empty 
 *                we pushed children of top node
 *        
 *        printed top node
 *        printed top node
 */



function levelOrder (){

    let queue = []
    let ans = []
    queue.push(root);

    while(queue.length > 0){
       if( queue[0].left  != null){
        queue.push(queue[0].left)
       }
       if( queue[0].right  != null){
        queue.push(queue[0].right)
       }

      ans.push(queue[0])
      ans.shift()
    }
}

function isAlphaN(s){
    return !("abcdefghijklmnopqrstuvwxyz".includes(s.toLowerCase()))
        
    }
    
    
    console.log(isAlphaN('.'))