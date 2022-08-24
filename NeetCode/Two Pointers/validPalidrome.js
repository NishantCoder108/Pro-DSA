/**
 * https://leetcode.com/problems/valid-palindrome/
 * Time O(N) | Space O(1)
 * @param {string}
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return true;

  s = s.toLowerCase();

  return isValid(s);
};

const isValid = (s) => {
  let [left, right] = [0, s.length - 1];

  while (left < right) {
    while (left < right && isNonAlphaNumeric(s[left])) left++;
    while (left < right && isNonAlphaNumeric(s[right])) right--;

    const isSame = s[left] === s[right];
    if (!isSame) return false;

    left++;
    right--;
  }

  return true;
};

const isNonAlphaNumeric = (char) => {
  const isNonAlpha = char < "a" || "z" < char; // a(97) - z(122)
  const isNonNumeric = char < "0" || "9" < char; // 0(48) - 9(57)

  return isNonAlpha && isNonNumeric;
};

//  console.log(isPalindrome("abccba"))

//  const isNonAlpha = ":" < 'a' || 'z' < ":";    // a(97) - z(122)
//  const isNonNumeric = ',' < '0' || '9' < ',';

//  console.log(isNonAlpha)
//  console.log(isNonNumeric)
//  console.log(isNonAlphaNumeric())

function isNotAlphanumeric(char) {
  const alphaca = char < "a" || char > "z";
  const alphNum = char < "0" || char > "9";

  console.log(alphaca, alphNum);
  return alphaca && alphNum;
}

console.log(isNotAlphanumeric("a"))

/**
 * 
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
 */
