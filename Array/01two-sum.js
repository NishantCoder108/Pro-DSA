//https://leetcode.com/problems/two-sum/
/**
 * I have a array ,we want see what two  element summation is equal to target.
 * If two element summation is not equal to target then it will return []
 *  arr= [3, 5, -4, 8, 11, 1, -1, 6]  target = 10
 * Output [-1,11] //the number can be reverse
 */

//Three Approach
// 1. O(n^2) | O(1) space
/**
 * we can iterate two for loops, First loop will start with 0 index till less than (array.length -1) .
 * In second loop ,it will start with index (i+1) till (array.length ).
 * Now we compare target to summation of both loop element .
 * If compare success then return both element.
 * If not ,return []
 */

let arr1 = [3, 5, -4, 8, 11, 1, -1, 6];
target1 = 10;

function twoNumberSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    //it will iterate till  < (n -1)
    for (let j = i + 1; j < arr.length; j++) {
      //it will iterate till  < (n)
      if (target === arr[i] + arr[j]) {
        return [arr[j], arr[i]];
      }
    }
  }
  return [];
}

console.log("First Approach", twoNumberSum(arr1, target1));

//2.Second Approach
// O(nlogn) | O(1) Space
/**
 * we can just sort of all elements of array and\
 * use Two Pointer, start and from End.
 * when start element + last element = target then return start and last element
 * when target > (start element + last element ) then start++
 * when target < (start element + last element) then end--
 * if they cross each other ,loop break.
 * if not ,return []
 * Time Complexity:-
 * log base = b
 * for sorting -   nlog    and for iterating - n
 * Summmation : -  nlogn + n  => n(logn + 1)  => n(logn + logb)  => n log(nb) => nlogN
 */

let arr2 = [3, 5, -4, 8, 11, 1, -1, 6];
target2 = 10;

function twoNumberSum2(arr, target) {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] == target) {
      return [arr[start], arr[end]];
    } else if (target > arr[start] + arr[end]) {
      start++;
    } else {
      end--;
    }
  }
  return [];
}

console.log("Second Approach:", twoNumberSum2(arr2, target2));

//Third Approach  , Hash Table
//O(n) time | O(n) space
/**
 *We make hash table easily by objects of javascript.
 *Target = ElementX + ElementY  => ElementX = Target - ElementY
 *Here we search ElementX in Hash ,if search Sucess 
 *return [ElementX , ElementY]
 *if not return []
 *ElementY will come from iterating the array
 */
 let arr3 = [3, 5, -4, 8, 11, 1, -1, 6];
 target3 = 10;

function twoNumberSum3(arr, target) {
  // Write your code here.

  //Use by Hashtable
  let hash = {};

  for (const value of arr) {
    let res = target - value;
    if (res in hash) {   //res is present , true
    
      return [value, res];
    }

    hash[value] = true; //here value is present so we can't give index
  }
  return []
}

console.log("Third Approach :-",twoNumberSum3(arr3,target3))





//Index find by using Hash Table
function indexFind(arr,target){
    let hash ={}

    for(const index in arr){
        let ans = target - arr[index];
        if(ans in hash){
            return [ index ,hash[ans]]
        }
        hash[arr[index]] = index  //here hash value is index
    }
   return []
}

console.log("Index Find by Hash map :-",indexFind(arr3,target3))

// Result:-
// First Approach [ -1, 11 ]
// Second Approach: [ -1, 11 ]
// Third Approach :- [ -1, 11 ]
// Index Find by Hash map :- [ '6', '4' ]




//Tips & Tricks
/**
 * -----Pattern -----
 * 1. Sum of two element of same Array, target
 *    Find Index or Value
 * 2. 
 */