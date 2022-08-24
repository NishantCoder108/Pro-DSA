/*
Tomato, Carrot,Beetroot
Problem Statement
Your current stamina is 1 you have N days to increase the stamina, You are given 3 arrays
T[i](1<=i<=N), C[i](1<=i<=N) and B[i](1<=i<N)
If you eat carrot on ith day your stamina will be multiplied by C[i], if you eat Tomato on ith day,
your stamina will get multiplied by T[i] and if you eat Beetroot on ith day your stamina is
multiplied by C[i]
You need to eat exactly one of carrot, beetroot, and tomato each day. And you can not eat the
same vegetable on consecutive days (i.e if you eat tomato on ith day you have to eat either
beetroot or carrot on i+1th day)
If you make poor choices and your stamina is minimum of what could have been obtained, what
is your stamina
Input Format
The first line contains an integer X denoting the number of test cases
The first line of each test case contains an integer denoting N
The Next N lines contain 3 space-separated integers denoting T[i], C[i] and B[i] (1<=i<=N)
respectively
Output Format
Print an integer denoting the minimum stamina you can obtain.
Constraints
1<=X<=1000
1<=N<=30
-4<=T[i],B[i],C[i]<=4
Sample Input
1
2
-1 4 -3
-1 1 2
Sample Output
-4
Explanation
Eat carrot on day 1 so your stamina becomes 1*4=4
Eat tomato on day 2 so your stamina becomes 4*-1 = -4
 */