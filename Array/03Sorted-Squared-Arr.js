/**
 * We have sorted array in ascending order , But we want to square the element that must be in Ascending order.
 * e.g. [1, 2, 3, 5, 6, 8, 9] --> [1,4,9,25,36,64,81]

 */

//Two Methods

//1.Method
// O(nlogn) time | O(n) space
/**
 * we just create empty array of size of array.length or []
 * We iterate whole array and every element multiply itself
 * push in squared Array
 * Now sort the squared Array
 * return squared array
 */
Input: array =[1, 2, 3, 5, 6, 8, 9];
Output: [1,4,9,25,36,64,81]

function sortedSquaredArray(array) {
  let squareArr = [];  //empty array where push element multiply itself
  for (const value of array) {
    squareArr.push(value * value);
  }
  return squareArr.sort((a, b) => a - b);//sort the squared Array
}

console.log(sortedSquaredArray(array))




//Method 02
//O(n) time | O(n) space
/**
 * We create array of size of array's length
 * we iterate the array by for loop using
 * Here Array is Sorted in Ascending order
 * we can compare start element and end element with absolute value
 * Math.abs(start element) > Math.abs(end element)  =>>> start++
 * If start element < end element  =>>> end--
 * Finally Done ,return square Arr
 */

 function sortedSquaredArray2(array) {
	
	// O(n) time | O(n) space
  // Write your code here.
	let squareArr = new Array(array.length).fill(0);
	let smallIdx = 0;
	let largeIdx = array.length -1;
	for(let i = array.length-1; i>=0; i--){
		if(Math.abs(array[smallIdx]) > Math.abs(array[largeIdx])){
			squareArr[i] = array[smallIdx] * array[smallIdx];
			smallIdx++;
		}else{
			squareArr[i] = array[largeIdx] * array[largeIdx]
			largeIdx--;
		}
		
	}
	return squareArr
}

console.log(sortedSquaredArray2(array))


//Tips & Tricks
/**
 * ---Pattern---
 * Sorted Array ,Square and must be Ascending or Descending
 * Follow Method 2
 * 
 * Not Sorted Array , Squared the array in Ascending or Descending
 * Follow Method 1
 */