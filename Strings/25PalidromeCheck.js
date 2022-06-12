//O(n)time |O(1)space
function isPalindrome(string) {
  // Write your code here.
  //comparing end and start

  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) return false;

    start++;
    end--;
  }
  return true;
}



//2nd Method
function isPalindrome(string) {
  // Write your code here.

  let reverseString = string.split("").reverse().join("");
  console.log("reverse string", reverseString, "string", string);
  return string === reverseString ? true : false;
}
