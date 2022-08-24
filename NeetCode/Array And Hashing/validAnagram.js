/**
 * https://leetcode.com/problems/valid-anagram/
 *hashmap to count each char in str1, decrement for str2;

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time Complexity O(nlogn) | O(N) space
var isAnagram = function (s, t) {
  //It is easy to find valid anagram by sorting the string and compare of both string it is equal or not.

  if (s.length !== t.length) return false;

  let a = s.split("").sort();
  let b = t.split("").sort();

  let ans = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));




//Method 2

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap.hasOwnProperty(s[i])) {
      //    let c = sMap[s[i]]++;
      sMap[s[i]]++;
    } else {
      sMap[s[i]] = 1;
    }
    if (tMap.hasOwnProperty(t[i])) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }
  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) {
      return false;
    }
  }
  console.log(sMap,tMap)
  return true;
};

// console.log(isAnagram2("ab", "ba"));
console.log(isAnagram2("anagram", "nagaram"));

// let d = {'k':1 ,'l':4}

// d['l']++

// console.log(d)

/**
 * 
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */
