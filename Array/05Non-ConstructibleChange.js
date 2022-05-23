/**
 * We have a Array ,that can have duplicate element.
 * What is the minimum change ,that can't we create 
 * from present element of the Array
 * e.g.[5, 7, 1, 1, 2, 3, 22]   =>>> 20
 */

Input :array = [5, 7, 1, 1, 2, 3, 22] 
Output :20

function nonConstructibleChange(array){
    array.sort((a,b) => a-b);
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