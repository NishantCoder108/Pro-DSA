//https://leetcode.com/problems/restore-ip-addresses/


/**
 * @param {string} s
 * @return {string[]}
 */

//o(1) time | O(1)space
var restoreIpAddresses = function (string) {

    const ipAddressesFound = [];

    for (let i = 0; i < Math.min(string.length, 4); i++) {

        const currentIPAddressParts = ["", "", "", ""];

        currentIPAddressParts[0] = string.slice(0, i);
        if (!isValidPart(currentIPAddressParts[0])) continue;


        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {

            currentIPAddressParts[1] = string.slice(i, j);

            if (!isValidPart(currentIPAddressParts[1])) continue;


            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {

                currentIPAddressParts[2] = string.slice(j, k);
                currentIPAddressParts[3] = string.slice(k);


                if (isValidPart(currentIPAddressParts[2]) && isValidPart(currentIPAddressParts[3])) {
                    ipAddressesFound.push(currentIPAddressParts.join('.'))
                }
            }
        }


    }


    return ipAddressesFound;


}



function isValidPart(string) {
    const stringAsInt = parseInt(string);

    if (stringAsInt > 255) return false;

    return string.length === stringAsInt.toString().length;
}







// -Another Method --------------------

function validIPAddresses(string) {
    let collection = [];


    function recurse(index, part, array) {
        if (string.length - index < 4 - part) return
        if (string.length - index > 3 * (4 - part)) return

        let section = string.slice(index)
        if (part === 3) {
            if (section.length > 1 && section[0] === "0") return

            if (Number(section) <= 255) collection.push([...array, section].join(''))
            return

        }
        for (let i = 1; i <= 3; i++) {
            let slice = string.slice(index, index + i)
            if (slice.length > 1 && slice[0] === "0") continue
            if (Number(slice) > 255) continue
            let passArray = [...array, slice, "."]
            recurse(index + i, part + 1, passArray)
        }
    }

    recurse(0, 0, [])
    return collection
}

/*

Comments NEW Set your username to comment. Most UpvotedNewestOldest No comments found. Tests Quick Test Sandbox Test Case 1 { "string": "1921680" } Test Case 2 { "string": "3700100" } Test Case 3 { "string": "9743" } Test Case 4 { "string": "97430" } Test Case 5 { "string": "997430" } Test Case 6 { "string": "255255255255" } Test Case 7 { "string": "255255255256" } Test Case 8 { "string": "99999999" } Test Case 9 { "string": "33133313" } Test Case 10 { "string": "00010" } Test Case 11 { "string": "100100" } Test Case 12 { "string": "1072310" } Test Case 13 { "string": "1" } Test Case 14 { "string": "11" } Test Case 15 { "string": "111" } Test Case 16 { "string": "00001" } Your Solutions Run Code Solution 1 Solution 1 Solution 2 Solution 3 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ⌄ ⌄ ⌄ ⌄ ⌄ function validIPAddresses(string) { // Write your code here. const ipAddressesFound = []; for(let i = 0; i< Math.min(string.length, 4); i++){ const currentIPAddressParts = ["","","",""]; currentIPAddressParts[0] = string.slice(0,i); if(!isValidPart(currentIPAddressParts[0])) continue; for(let j = i+1; j< i + Math.min(string.length - i, 4); j++){ currentIPAddressParts[1] = string.slice(i,j); if(!isValidPart(currentIPAddressParts[1])) continue; for(let k = j+1; k < j + Math.min(string.length - j, 4); k++){ currentIPAddressParts[2] = string.slice(j,k); currentIPAddressParts[3] = string.slice(k); if(isValidPart(currentIPAddressParts[2]) &&  isValidPart(currentIPAddressParts[3])){ ipAddressesFound.push(currentIPAddressParts.join('.')) } } } } Custom Output Raw Output Submit Code Run or submit code when you're ready. Back To Questions List Next Question Data Structure Visualizer 00:00:00 Minutes 45 Start Reset Timer Stopwatch Bug Report Settings

    */