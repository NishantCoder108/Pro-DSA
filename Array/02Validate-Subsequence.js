//https://leetcode.com/problems/is-subsequence/
//Subsequence means always Maintain the order of original array.
/**
 * I have a original array or string and I have another array or string  which is subsequence of original array.
 * True or False
 */

//Method 2

//O(n) time | O(1) space
/**
 * First we can iterate from left starting index 0 till both array length
 * We have index 0 ,of both array.
 * Original array index will +1 on every iteration but
 * Sequence array index will +1 ,when its element match to original array
 * return Compare ,sequence.length === sequence index is adding +1 on every iteration
 * If length is same ,it means all elements of sequence is present in original array
 */
function isSubseqence(arr, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < arr.length && seqIdx < sequence.length) {
    if (sequence[seqIdx] === arr[arrIdx]) {
      seqIdx++;
    }

    arrIdx++;
  }

  return seqIdx === sequence.length;
}

Input: arr = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];
Output: true;
console.log(isSubseqence(arr, sequence));





//Method 1
//O(n)time | O(1) space
/**
 * Approach is same ,but we can use for loop here.
 */

function isSubseqence2(arr,sequence){
    let seqIdx = 0;

    for(const value of arr){

        if(seqIdx === sequence.length)break;
        if(sequence[seqIdx] === value)seqIdx++;

    }
    return seqIdx === sequence.length;
}

console.log(isSubseqence2(arr,sequence))



//Tips & Tricks
/**
 * ---Pattern---
 * Maintain the order 
 * True or False
 */