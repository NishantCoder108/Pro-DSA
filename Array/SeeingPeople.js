/*
Problem Statement :
 
There are N people standing in a queue. They are numbered from 1 to N from left to right.
You have been given an array A of size N, where A[i] denotes the height of the i-th person. 
A person i can see another person j, if i and j follows the following rules :
i < j
The height of every person between i and j should be less than the height of j-th person,
i.e for every k(i < k < j), A[k]<A[j].
You have to print N integers, where i-th integer will denote the number of people i-th person can see.

Constraints :
1 <= t  <= 10^3 
1  <=N <= 10^5
1  <=A[i]  <= 10^6
 
Input Format :
First-line contains a single integer t, the number of test cases.
The first line of each test case contains a single integer N, the number of people standing in the queue.
The second line of each test case contains N positive integers, i.e the height of people.
The sum of N over all test cases doesn’t exceed 4*10^5
 
Output Format :
For each test case, output a single line, and each line should contain N integers— Where i-th integer
denotes the number of people the i-th person can see.
 
Sample Input :
1
6
11 6 7 5 11 11
Sample Output :
3 2 2 1 1 0 
Explanation of Sample :
1st person can see the person standing at positions 2, 3, and 5.
2nd person can see the person standing at positions 3 and 5.
3rd person can see only the person standing at position 5.
4th person can see only the person standing at position 5.
5th person can see only the person standing at position 6.
No person standing in front of 6th person.

*/
let tc = parseInt(readline()); //Number of test cases taking
let i = 0; //while looping starting for test cases.
while (i < tc) {
  //condition of test case

  let arrLen = parseInt(readline()); //array length that is given in Input section
  let arr = readline().split(" ").map(Number); //third line is in array form, so I split into array

  let outputArr = []; //final output array where i push all seen people by index thats his position.
  for (let i = 0; i < arrLen; i++) {
    //looping till array length

    let howMuchSeenPeople = 0; //In starting , seen people by position is ZERO.
    if (arr[i] >= arr[i + 1] || arr[i] < arr[i + 1]) {
      //Condition ,
      //if 1st position people is greater than next position people ,definitely first position people can see next position people.
      //if 1st position people is less than next position people ,definitely first position people can see next postion people.
      //if 1st position people is exactly equal to  next position people ,definitely first position people can see next postion people.

      howMuchSeenPeople += 1; //All conditons are true , we increment by 1.
    }

    /*
		Note : -
		We can remove upper condition we directly , we can increment by 1 ,
		But , when last position people , have reached loop , then it will not have , next position people
		   but it will directly updated by 1 . so , it will give wrong answer of last position people
		 Hence , we give the upper condition.
		 
		-----If you have another approach ,please share in learning group FE2  batch on slack . we will together solve the problem.--- 
		*/

    for (let j = i + 1; j < arrLen; j++) {
      //this loop is started by (i+1) because of i and  i+1 , is checked , it will started with i +1 , for next position people
      if (arr[j] < arr[j + 1]) {
        //if suppose, prev position people  is less than next position people , it will continuing see the next next position people.

        howMuchSeenPeople += 1; //condition satisfies , then it will increment by 1.
      }
    }

    outputArr.push(howMuchSeenPeople); //all seen position people , here we push in final output array
  }

  console.log(outputArr);

  i++; //increasing the i with i + 1
}

/*
Nishant Kumar
FE 2 Batch


*/
