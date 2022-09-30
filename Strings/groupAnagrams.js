/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 const groupAnagrams = function(strs) {
    let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
};






//Other Method
var groupAnagram = function(strs) {
    const groups = new Map();
    for (const s of strs) {
        const key = [...s].sort().join('');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(s);
    }
    return [...groups.values()];
};



//Final My Code-------

var groupAnagramsO = function(strs) {
    
    let groupWord = {};
    
    for(let i = 0; i<strs.length;i++){
        
        const sortedStr = strs[i].split("").sort().join("");
        
        if(groupWord[sortedStr] != undefined){
            
            groupWord[sortedStr].push(strs[i])
         }else{
             
             groupWord[sortedStr]= [strs[i]]
     }
    }
    
    return Object.values(groupWord)
    
    
};