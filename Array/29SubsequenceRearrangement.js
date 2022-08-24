function SubsequenceRearrangement(array) {
  const sortedArray = [...array].sort((a, b) => a - b);

  let minPossibleVal = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) minPossibleVal++;
  }

  return minPossibleVal;
}

let arr = [1, 2, 5, 4, 3];
console.log(SubsequenceRearrangement(arr));



/*
Question Name: Subsequence Rearrangement
 
 
 
Problem Statement
 
 
 
Antonio got an array A consisting of N positive integers as his 
christmas present.
 
Antonio likes uniformity and does not like this array because its 
elements have been arranged very randomly. He will like the array if
and only if it is sorted(either in ascending or descending order).
 
To do so he decided to perform the below operation exactly once :
 
Select a subsequence of array A of size K and rearrange the 
numbers in that subsequence.
For example if A = [1 2 5 4 3], and Antonio decided to select
subsequence [1 2 5 4 3], then he can rearrange it as [1 2 3 4 5] 
to sort array A in ascending order.
As rearranging a very large subsequence can be a tedious task,
Antonio wants to select the subsequence with minimum possible 
length(i.e. K should be minimised).
 
As Antonio is weak in problem solving with arrays
he asked you for help. Given array A, print the minimum possible 
value of K such that Antonio can perform the given operation on a
K length subsequence and make array A sorted(either in ascending or
descending order).
 
 
 
Input Format
 
 
 
First line of input contains a single integer denoting N.
Next line contains N space separated integers denoting the elements 
of array A.
 
 
Output Format
 
 
 
Print the minimum possible value of K such that
Antonio can perform the given operation on a K
length subsequence and make array A sorted(either in ascending or
descending order).
 
 
Constraints
 
 
 
1<=N<=105
1<=Ai<=105
 
 
Sample Input 1
 
 
 
5
 
1 2 5 4 3
 
 
 
Sample Output 1
 
 
 
2
 
 
 
Explanation of Sample 1
 
 
 
Antonio can select the subsequence [1 2 5 4 3] and rearrange
its elements as [1 2 3 4 5] to make array A sorted in ascending order.

*/