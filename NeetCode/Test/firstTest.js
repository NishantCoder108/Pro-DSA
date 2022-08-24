/*
test 0 - WA (score=0.000000, sig=0, time=0.019307, mem=19008)
test 1 - WA (score=0.000000, sig=0, time=0.030840, mem=20748)
test 2 - WA (score=0.000000, sig=0, time=0.030236, mem=20688)
test 3 - WA (score=0.000000, sig=0, time=0.030485, mem=20868)
test 4 - WA (score=0.000000, sig=0, time=0.027857, mem=20252)
test 5 - WA (score=0.000000, sig=0, time=0.026301, mem=20160)
test 6 - WA (score=0.000000, sig=0, time=0.082448, mem=26452)
test 7 - WA (score=0.000000, sig=0, time=0.082164, mem=25460)
test 8 - WA (score=0.000000, sig=0, time=0.082363, mem=26876)
Source code
let tc = parseInt(readline());

while (tc--) {
  let [N, K] = readline().split(" ").map(Number);
  
  let arrayA = readline().split(" ").map(Number);
  
  
 //console.log(N,K);
  //console.log(arrayA);
  let final = (getBuckets(arrayA,N));
  console.log(final - K)
 
}


function getBuckets(arr,N){
	//find total elem 
	let availableEle = N * (N - 1) / 2;
	
	//sort the array in ascending order
	arr.sort(function(a,b){return a- b});
	
	let i = 0,sum = 0;
	
	//Check if bucket can be filled with available ele
	
	while(sum <= availableEle){
		
		
		sum += arr[i];
		
		i++;
	}
	
	
	return (i - 1)
}


/**
 * 
 Perfectly Filled Buckets


Problem Statement



Amy has an array A of N prime numbers. She needs to fill K buckets with the integers of the arrays. Initially all the buckets are empty.



Buckets are numbered from 1 to N.



Each element of the array can be put in at most one bucket. Also, each bucket must contain at least one integer.



A bucket is considered “perfectly-filled”, if after removing at most one integer from the bucket, the product of the resultant integers in the bucket becomes a perfect square or the bucket will become empty.



For example, bucket with integers: {2, 2, 5} is considered as “perfectly-filled” as after removing integer 5, the product of the resultant integers will become perfect square.



Buckets: {3}, {2, 2}, {5, 3, 3} are “perfectly -filled”.



Amy filled all the K buckets “perfectly”.



Bi denotes the number of integers in the bucket numbered i.



She wants to maximize the value of M, M = MIN (B1, B2, …, BK).



Help to find the maximum possible value of M, if she fills the buckets optimally.



You are given T independent test cases.



Constraints



1 <= T <= 5
1 <= K <= N <= 105
2 <= Ai <= 120
Ai is prime number.
All input values are integers.


Input Format



First-line contains T.
First line of each test case consists of two space separated integers N and K.
Second line of each test case consists of N space separated integers denoting the array A.


Output Format



Print in a newline for each test case a single integer denoting the maximum possible value of M.


Sample Input 1



1

5 2

3 2 5 3 2



Sample Output 1



2



Explanation of Sample 1



B1 = 3, bucket-1 contains {3, 5,3}

B2 = 2, bucket-1 contains {2, 2}

M = MIN (B1, B2) = 2



Things to Note for the Candidate:



You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.



The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.



Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.



Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code.



﻿We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)
 */
// --------------------------------------------------------------------------------

let tc = parseInt(readline());

while (tc--) {
  let len = parseInt(readline());
  let str = readline().split("");

  //console.log(N);
  //console.log(str);
  console.log(minOperations(str, len));
}

function minOperations(s, len) {
  // var len = s.length;
  var result = 0;

  //iterate half of string

  for (var i = 0; i < len / 2; i++) {
    //find the absolute difference between the characters

    var D1 =
      Math.max(s[i].charCodeAt(0), s[len - 1 - i].charCodeAt(0)) -
      Math.min(s[i].charCodeAt(0), s[len - 1 - i].charCodeAt(0));

    var D2 = 26 - D1;

    //Adding the minimum difference  of the two result;

    result += Math.min(D1, D2);
  }

  return result;
}

