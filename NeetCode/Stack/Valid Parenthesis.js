/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    let openBracket = "({[";
    let closeBracket = ")}]";
    
    let matchBracket = {
        ")": "(",
        "}":"{",
        "]":"["
    }
    

    let dataItems = []
   
 
    for(let i= 0; i <s.length; i++){
      // console.log(dataItems,"1")
        if(openBracket.includes(s[i])){
            dataItems.push(s[i])
        }
        
              // console.log(dataItems,"2")

        if(closeBracket.includes(s[i])){
            if(dataItems.length === 0)return false;
            
            
            if(matchBracket[s[i]] === dataItems[dataItems.length -1]){
                dataItems.pop();
            }else{
                return false;
            }
            
                  // console.log(dataItems,"3")

        }
    }
    
    return dataItems.length === 0
};



//Method 2----------
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    let closeMap = {
        '}': '{',
        ')': '(',
        ']': '[',
    };

    let charStack = [];

    if (!s) return false;

    for (let i = 0; i < s.length; i++) {
        let curr = s.charAt(i);
        // check if closing bracket
        if (closeMap[curr]) {
            const topElement = charStack.length === 0 ? '#' : charStack.pop();
            if (topElement !== closeMap[curr]) {
                return false;
            }
            // opening bracket case
        } else {
            charStack.push(curr);
        }
    }

    return charStack.length === 0;
};






/**
 * 
 20. Valid Parentheses
Easy

14774

717

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:
 */


var str = '({['
console.log(str.includes("("))

var matchBracket = {
    ")": "(",
    "}":"{",
    "]":"[",
    name: "Nishant"
}


console.log(matchBracket['name'])
console.log(matchBracket.key("name"))