/**
 * We have a Array ,that can have duplicate element.
 * Element in array will be positive integer or Natural number
 * What is the minimum change ,that can't we create 
 * from present element of the Array
 * e.g.[5, 7, 1, 1, 2, 3, 22]   =>>> 20
 */



// Method 01
//O(nlogn) time | O(1) space
/**
 * we can simply ,sort the array ,from which
 * it can easily implementation of minimum change 
 * element of array >  minimum change + 1
 * return minimum change + 1 , it will be answer
 * Otherwise iterate whole loop and summmation of value with minChange.
 * Compare with element from minimum change +1
 * Finally return after loop is done, minimum change + 1
 * 
 */
Input :array = [5, 7, 1, 1, 2, 3, 22] 
Output :20

function nonConstructibleChange(array){
    array.sort((a,b) => a-b);//sorting the array in O(1)space
    let minChange = 0

    for(const value of array){
        if(value > minChange + 1){
            return minChange + 1;
        }

        minChange += value;
    }
    
    return minChange+1;

}
console.log(nonConstructibleChange(array))

//Brute Force Approach
/**
 * we  can check from start 1 till array's length
 * 1 can we make from this array
 * 2 can we make from this array
 * 3 can we make from this array
 * and so on ...
 * finally we will have minimum change that can't be created
 * from this element of the array
 */


//Tips & Tricks
/**
 * ---Pattern---
 * Minimum Change ,Finding
 */