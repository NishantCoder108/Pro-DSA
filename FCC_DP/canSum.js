//I have targetSum and Array , we can create targetSum with elements of array
//True or False

//O(n^m)time  | O(m)space
function canSum(targetSum, numbers){

    if(targetSum === 0)return true;
    if(targetSum < 0) return false;


    for(const num of numbers){
        const remainder = targetSum - num;

        if(canSum(remainder, numbers) === true ){
            return true;
        }
    }

    false;
}


//Optimize Versions
//O(m *n)time }| O(m)space

function canSumDp(targetSum,numbers,memo ={}){

    if(targetSum in memo)return memo[targetSum]

    if(targetSum === 0)return true;
    if(targetSum < 0 )return false;

    for(const num of numbers){
        const remainder = targetSum - num;

        if(canSumDp(remainder,numbers,memo) === true){
            memo[targetSum] = true;
            return memo[targetSum]
        }
    }

    memo[targetSum] = false
    return false;
}


//checking with console

console.log(canSum(7,[2,3]))//true
console.log(canSum(7,[5,3,4,7]))//true
console.log(canSum(7, [2,4]))//false
console.log(canSum(8, [2,3,5]))//true
// console.log(canSum(300, [7,14]))//false

console.log("----------------------------")
console.log(canSumDp(7,[2,3]))//true
console.log(canSumDp(7,[5,3,4,7]))//true
console.log(canSumDp(7, [2,4]))//false
console.log(canSumDp(8, [2,3,5]))//true
console.log(canSumDp(300, [7,14]))//false