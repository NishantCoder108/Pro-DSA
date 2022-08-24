/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Method 1 :--- O(n)time | O(1)space--
 var reverseList = function(head) {
    if(head === null)return null;
  
 let prev = null;
    
    while(head){
        let temp = head.next;
        head.next = prev;
        
        prev = head;
        
        head = temp
    }
    
    
    return prev;
  }


  
//Method 2 :- Recursive Way  ---O(n)time | O(n)space
var reverseList = function(head) {
    if(head === null)return null;
  
 let newHead = head;
    
   if(head.next){
       newHead = reverseList(head.next);
       head.next.next = head
   }
    
    head.next = null
    
   return newHead; 
  }

/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

*/