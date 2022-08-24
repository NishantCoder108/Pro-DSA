//We have targetSum and array , we have create to targetSum from elements of array
//Print which element can create to target sum 


//O(n ^ m   * m) time  | O(m)space
function howSum(targetSum, numbers){
    if(targetSum === 0)return [];
    if(targetSum < 0) return null;


    for(const num of numbers){
        const remainder = targetSum - num;

        const resultant = howSum(remainder,numbers);
        if(resultant !== null){
            return [...resultant, num]
        }
    }

    return null;
}



//Optimize 
//O(n * m^2) time | O(m^2)space
function howSumDp(targetSum ,numbers,memo= {}){
    if(targetSum in memo)return memo[targetSum];

    if(targetSum === 0)return [];
    if(targetSum < 0) return null;

    for(const num of numbers){
        const remainder = targetSum - num;

        const remainderResult = howSumDp(remainder ,numbers,memo);

        if(remainderResult !== null){
             memo[targetSum] = [...remainderResult, num]
             return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

console.log(howSum(7,[2,3]))//[ 3, 2, 2 ]
console.log(howSum(7,[5,3,4,7]))//[ 4, 3 ]
console.log(howSum(7, [2,4]))//null
console.log(howSum(8, [2,3,5]))//[ 2, 2, 2, 2 ]
// console.log(howSum(300, [7,14]))//false

console.log("----------------------------")
console.log(howSumDp(7,[2,3]))//[ 3, 2, 2 ]
console.log(howSumDp(7,[5,3,4,7]))//[ 4, 3 ]
console.log(howSumDp(7, [2,4]))//null
console.log(howSumDp(8, [2,3,5]))//[ 2, 2, 2, 2 ]
console.log(howSumDp(300, [7,14]))//null