/**
 
------Properties of Hash function------

 output of hashmap against some input should be same


 minimum collision


 --how we will manage the collision--


[1,2,2,2,,3,3,3,4,5]



 */

var arr = [1,2,2,2,3,3,3,4,5,1,2];

let duplicateCount = {}

for(let i= 0; i<arr.length ; i++){

    if(arr[i] in duplicateCount){
        duplicateCount[arr[i]]++;
    }else{
        duplicateCount[arr[i]] = 1
    }
}

console.log(duplicateCount)






//Hashing

/**\
let dictionary = {};


function addWord(word,meaning){
    dictionary[word] = meaning;
}


function getWord(word){

    return dictionary[word]
}

 * \
 */
// addWord('cat','billi')
// addWord('dog','kutta')



// console.log(getWord('cat'))
// console.log(getWord('dog'))


let phonoDiction = {}

function addPhone (name, num){
    phonoDiction[name] = num
}

function getPhone(name){
    return  phonoDiction[name]
}


// addPhone('Nishant','9868978956')
// addPhone('Nishant','698795895')


// console.log(getPhone('Nishant'))
// console.log(getPhone('Nishant'))



// let obj = {
//     false :'nishant',
//     true: 'ketu',
//     undefined: 'dd'
// }

// console.log(obj['false'])