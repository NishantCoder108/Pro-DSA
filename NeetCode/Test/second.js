array = '7 1 8 2 7 6 4 1 9 1'.split(' ').map(Number)
X = 6
n = array.length

bootcamps = 0
array.sort((a,b) => b-a)
target = 2 * X //12
done = false
i = 0
len = 1
console.log(array)

while(!done){
  bootcampArray = array.slice(i,i+len)
  minEle = bootcampArray[len-1]
  if (minEle * len > target){
    bootcamps += 1
    i += len
    console.log('success: ', bootcampArray)
  }
  else{
    len += 1
  }
  if (i + len > n){
    done = true
  }
}
console.log(bootcamps)



/**
 * 
You are given N students and an array of size N. The knowledge of the i-th student is a[i]. 
You are also given an integer X. You want to create some boot camps to teach them about coding. 
Since you want to make the maximum profit, you have to create the maximum number of boot camps possible. 
To create a bootcamp the product of the number of students in the bootcamp and the student with the least 
knowledge should be greater than twice of X. 
Also a student can be a member of only one bootcamp and a few students might not be a part of any bootcamp.

Count the maximum number of boot camps possible.


Constraints

 

All the input values are integers
1<=t<=100
1<=N<=10^5
1<=X<=10^9
1<=a[i]<=10^8
 

Input :

 

The first contains the integer t the number of test cases.

The first line of each test case contains N and X where N is the number of students and X is an integer

The second line of each test case contains the N elements of the array

 

Output :

 

Print the maximum number of boot camps you can make.

 

Sample Input :

 

2

10 6: 12

7 1 8 2 7 6 4 1 9 1 = [7, 7], [8, 9],  
9 8 7 7 6 4 2 1 1 1

4 7: 14
 

Sample Output :

 

2

1

 

Sample Explanation :
 */