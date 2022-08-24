/*
Question name: Alien Invasion
Problem Statement
Jay is defending against an Alien Invasion. There are N enemy ships, each with health A1,A2, ... AN. Jay has a
laser cannon which deals X damage to a specific enemy ship and Y damage to all the other remaining ships
in one blast (X > Y) but each shot leads to D damage to the cannon. The cannon has H health in the
beginning and will be destroyed if the health of the cannon becomes 0 or less. Find the minimum number of
shots Jay needs to make to destroy all enemy ships or print “-1” if the cannon will be destroyed first.
Note: To destroy an alien ship, you need to attack it until its health is 0 or less.
Input Format
First line contains a single integer T, the number of test cases.
First line of each test case contains a single integer N.
The following line contains N space separated integers A1, A2, ... AN.
The following line contains two integers X and Y.
The following line contains two integers H and D.
Output Format
For each of the T testcases :
Print a single line containing an integer, the minimum number of shots or “-1”
Constraints
1 <= T <= 103
1 <= N <= 105
0 <= Ai <= 109
1 <= X, Y, H, D <= 109
Note :- Sum of N over all testcases will not exceed 106.
Sample Input 1
2
4
8 7 5 1
5 3
10 2
2
10 20
10 4
10 5
Sample Output 1
2
-1
Assignment Questions

Explanation
In the 1st testcase, we can first hit the ship with 8 health. So the health of the ships will become 3, 4, 2, -2 and
the 4th ship will be destroyed and the health of our cannon will become 8. Then we can hit the 2nd ship to
destroy all the remaining ships and the health of the cannon will be 6.
In the 2nd testcase, our cannon will be destroyed before the enemy ships in all the possible ways.


*/


// your code goes here// your code goes here
let t=parseInt(readline()); //testcase
while(t--){
	let n=parseInt(readline());//number of ships
	let arr=readline().split(' ').map(Number); //array of ships
	let arr2=readline().split(' ').map(Number);
	let x=arr2[0];
	let y=arr2[1];
 
	let arr3=readline().split(' ').map(Number);
	let h=arr3[0];
	let d=arr3[1];
 
	let shot=0; // variable to store count of number od shots.
    arr.sort((a,b)=>(b-a));//sort array in descending order so that
						//we can hit the ship with highest health first
 
	for(let i=0;i<n;i++){
		arr[0]=arr[0]-x;  //reduce health of first ship by x
		for(let j=1;j<n;j++){
			arr[j]=arr[j]-y; //reduce health of remaining ships by y
		}
		h=h-d;  // reduce health of cannon by d after each shot
		shot++;
         console.log(arr);
		 if(!checkArray(arr,n) && h>0){ //check if all ships are destroyed or not and 
			console.log(shot);        // if yes then print shots and break out of loop
			break;
		}
		if(h<=0 && checkArray(arr,n)){    			//check health of cannon in each iteration and 
								//	if found less than equal to 0,print -1 and exit loop
			console.log(-1);
			break;
		}
 
 
	   arr.sort((a,b)=>(b-a));// again sort in descending so that 
	   						//we can hit ship with highest health first
 
	}
 
 
}
function checkArray(arr,n){
	for(let i=0;i<n;i++){
		if(arr[i]>0)
			return true;
	}
	return false;
}
 



/**
 * 
 * for confusing , in fetching or any things parts ,  you just commented
 */