// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function readline() {
//   return inputString[currentLine++];
// }

// function main(){
//   const t = parseInt(readline());
//   for(let i=0;i<t;i++){
//      let n = parseInt(readline());
//      let string = readline();
//     let i=0,j=n-1;
//     let changes =0;

//     while(i< j){
//       if(string[i] !== string[j]){
//         let left = string.charCodeAt(i);
//         let right = string.charCodeAt(j);
//         let diff = Math.abs(right- left);

//         if(diff >13){
//           right = 122-right;
//           left = (left-97);
//           changes +=(right+left+1);
//         }
//         else{
//           changes += diff;
//         }
//       }
//       i++;
//       j--;

//     }

//     console.log(changes);

//   }
// }

////----Testing--------

let n = 3;
let string = "dbs";
let i = 0,
  j = n - 1;
let changes = 0;

while (i < j) {
  if (string[i] !== string[j]) {
    let left = string.charCodeAt(i);
    let right = string.charCodeAt(j);
    let diff = Math.abs(right - left);

    if (diff > 13) {
      right = 122 - right;
      left = left - 97;
      changes += right + left + 1;
    } else {
      changes += diff;
    }
  }
  i++;
  j--;
}

console.log(changes);

///----Testing ----------

/**
Making Palindromes
Problem Statement



Amy has a string S consisting of N lowercase English letters. In one operation she can change any letter of the string to either its preceding letter or its succeeding(following) letter in alphabetical order.



Assume the order to be cyclic, so preceding letter of ‘a’ is ‘z’ and succeeding letter of ‘z’ is ‘a’.



For Example, if S = “abca”, then she can change the letter ‘c’ to either ‘b’ or ‘d’, in one operation, so string either becomes “abba” or “abda”.



Find the minimum number of operations required to make string S, a palindrome. Palindrome is a string that reads backward or forward. For example, strings “aba”, “ooo” are palindrome.



You are given T independent test cases.



Constraints



1 <= T <= 10
1 <= N <= 105


Input Format



First-line contains T.



First line of each test case consists of a single integer N.



Second line of each test case consists of a string S.





Output Format



Print in a newline for each test case a single integer denoting the minimum number of operations required to make string S a palindrome.





Sample Input 1



2

3

aby

3

lol



Sample Output 1



2

0





Explanation of Sample 1



For 1st test case, she can change the first character to ‘z’ and also the last character to ‘z’, in one operation each. So, S = “zbz”



For 2nd test case, S is already a palindrome.




 */
