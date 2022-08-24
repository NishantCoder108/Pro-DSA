let arr = [1,3,4,4,5,6,6,7,7]
function getSum(arr){
    let currSum = 0;//c

    for(let i= 0; i< arr.length ; i++){//loop c
        currSum +=arr[i]
    }

    return currSum;//c
}

console.log(getSum(arr))  //time complexity , it all depends on arr length , it complexity is n


//o(n)
function getIndexOfElementOfArr(arr, ele){
    
    for(let i = 0; i<arr.length; i++){

        if(arr[i] === ele){
            return i
        }
    }

    return -1
}

console.log(getIndexOfElementOfArr(arr,5))
console.log(getIndexOfElementOfArr(arr,9))



//Time Complexity ,O(n ^ m)
function nested(n,m){
    let k = 0;
    for(let i  = 0; i< n ; i++){

        for(let j =0; j<m; j++){
 
            k++
        }
    }

    return k
}

console.log(nested(6))




//Time Complexity O(n ^ 2)
function nested1(n){

    let k =0;
    for(let i = 0; i< n; i++){

        for(let j = i; j <n; j++){

            k++
        }
    }

    return k
}

console.log(nested1(6))



//Time Complexity O(n undeerroot(n))
function nested3(n){
    let k = 0;
    for(let i = 0;i< n; i++){
        for(let j = i ; j * j < n; j++){
            k++
        }
    }

    return k
}




//Time Complexity : n^2 + log(n)
// function nested5(n){
//     let k = 0;

//     for(let l = 0; l<n; l++){
//         for(m = l ; m <n; m++){

//             for(let u =1 ; u < n; u =u/ 2){
//                 k++
//             }
//         }
//     }


//     return k
// }




//Time Complexity : n log(n)
function nested6(n){
    let k = 0; 
    for(let i= 0; i<n; i++){//n
        for(let j=i; j<n; j = j* 2){//log(n)
            k++
        }
    }

    return k
}






//----Time complexity in Built in of js

/**
 * Array :
 *    insert from last and pop from last :  o(1)
 *    delete from first or unshift from first : O(n)
 *    searching :O(n)
 *    
 * 
 * map:
 *    map.set(key , value) : O(1)
 *    map.get(key) : O(1)
 *    map.get(value):O(n)
 *    deltete(key) :O(1)
 * 
 * 
 * 
 * Hash:
 *    insert : O(1)
 *    search :O(1)
 *    delete :(1)
 *    search value :(n)
 * 
 * 
 * set:
 *    insert: O(1)
 *    delete :O(1)
 *    search : O(1)
 *    
 */