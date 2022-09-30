/**
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function (string) {

    let currentLongest = [0, 1];

    for (let i = 1; i < string.length; i++) {

        const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
        const even = getLongestPalindromeFrom(string, i - 1, i);

        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest


    }

    return string.slice(currentLongest[0], currentLongest[1])
}


function getLongestPalindromeFrom(string, leftIdx, rightIdx) {

    while (leftIdx >= 0 && rightIdx < string.length) {
        if (string[leftIdx] != string[rightIdx]) break;

        leftIdx--
        rightIdx++
    }

    return [leftIdx + 1, rightIdx]
}


console.log(longestPalindrome( "abaxyzzyxf"))




//Another Method----------------









function longestPalindromicSubstring(string) {
    // Write your code here.
    //Making substring

    let subStrArr = [];

    //Make Sub string array
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            subStrArr.push(string.slice(i, j + 1))
        }

    }


    //find maximum palindrome length , substring

    //palindrome check and store in palindrome hash
    let palindromeHash = {}
    for (const value of subStrArr) {

        let isValuePalindrome = false;
        let s = 0;
        let e = value.length - 1;

        while (s <= e) {

            if (value[s] != value[e]) {
                isValuePalindrome = false;
                break;
            } else {
                isValuePalindrome = true;
            }


            s++
            e--
        }

        if (isValuePalindrome) {
            palindromeHash[value] = value.length;
        }


    }
    // console.log(subStrArr)
    console.log(palindromeHash)


    //Finding maximum value of substring

    let maxVal = Math.max(...Object.values(palindromeHash))


    for (let key in palindromeHash) {

        if (palindromeHash[key] == maxVal) return key

    }
}




var substring = [
    'a', 'ab', 'aba', 'abax',
    'abaxy', 'abaxyz', 'abaxyzz', 'abaxyzzy',
    'abaxyzzyx', 'abaxyzzyxf', 'b', 'ba',
    'bax', 'baxy', 'baxyz', 'baxyzz',
    'baxyzzy', 'baxyzzyx', 'baxyzzyxf', 'a',
    'ax', 'axy', 'axyz', 'axyzz',
    'axyzzy', 'axyzzyx', 'axyzzyxf', 'x',
    'xy', 'xyz', 'xyzz', 'xyzzy',
    'xyzzyx', 'xyzzyxf', 'y', 'yz',
    'yzz', 'yzzy', 'yzzyx', 'yzzyxf',
    'z', 'zz', 'zzy', 'zzyx',
    'zzyxf', 'z', 'zy', 'zyx',
    'zyxf', 'y', 'yx', 'yxf',
    'x', 'xf', 'f'
]
