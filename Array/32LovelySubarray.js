/*Problem 1:
Problem Statement :

This time Alice came with an integer array A of size N.

She likes XOR operation so much that she called a subarray lovely if the sum of all elements of that subarray is equal to the XOR sum of all elements of that subarray,

i.e a subarray from l to r (1 <= l <= r <= N) is lovely if A_l + A_l+1 + A_l+2 + ... + A_r = Al xor A_l+1 xor A_l+2 xor ... xor A_r.

Alice is not so good at programming so she asked you to count the number of lovely subarrays of array A.

The number of lovely subarrays can be large so you have to report count modulo 998244353.

Note:- A subarray is a contiguous part of an array

Constraints :

1 <= N <= 2*10^5
0 <= A[i] <= 2^30
 
Input Format :

The first line of each test case contains a single integer N, the number of elements in array A.
The second line of each test case contains N positive integers.
 
Output Format :

For each test case, output a single line— the number of lovely subarrays of array A modulo 998244353.
 
Sample Input :
6
4 7 10 7 6 9

Sample Output :
7

Explanation of Sample :
Following are the 7 lovely subarray [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [5, 6]

Note:- Here [l, r] means the subarray which starts at index l and ends at index r is lovely.

-----------------------------------------------------------------------------------------------------
Solution=>
*/
let arr1 = [4, 7, 10, 7, 6, 9];
let n = arr1.length;
let count = 0;


for (let i = 0; i < n ; i++) {
 let sum  =0;
let exor =0;
  for (let j = i; j < n; j++) {
    sum = sum + arr1[j];
    exor = exor ^ arr1[j];

	// console.log("sum",sum)
	// console.log("exor",exor)
    if (sum == exor) {
      console.log(i, j);
      count++;
    }
  }
}

console.log("Total lovely subarrays are " + count);


// console.log(3 ^ 4)


// for(let i -===)
//    let sum ,exor = 0
//      for(let j = i === ,,,)
// 	    sum += arr[j]
// 		exor = exor ^ arr[j]

// 		if(exor == sum){
// 			count++
// 		}