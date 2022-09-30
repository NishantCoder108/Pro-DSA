/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  str = s.toLowerCase();

  let startIdx = 0;
  let endIdx = str.length - 1;

  let ans = false;

  while (startIdx < endIdx) {
    while (startIdx < endIdx && isAlphaN(str[startIdx])) {
      startIdx++;
    }

    while (endIdx > startIdx && isAlphaN(str[endIdx])) {
      endIdx--;
    }

    if (str[startIdx] == str[endIdx]) {
      startIdx++;
      endIdx--;
    } else {
      return false;
    }
  }

  return true;
};

function isAlphaN(s) {
  return !"abcdefghijklmnopqrstuvwxyz0123456789".includes(s.toLowerCase());
}

console.log(isAlphaN("c"));
/*


 string remove extra things
 convert into lower case
 
 using for loop ,check first and last element equal
 return false or true
*/
