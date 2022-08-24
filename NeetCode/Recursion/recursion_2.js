
//Print order of Array's Element 
//Stack define

let arr2 = [3,4,5,6,7,8,9]

function printOrderElement(index){

if(arr2.length <= index)return;

console.log("Pre Element",arr2[index])

index = index + 1

printOrderElement(index)

console.log("Post Element", arr2[index])
}

printOrderElement(0)





//Range Sum

function rangeSum(n){

    if(n <= 1){
        return 1
    }

    return n + rangeSum(n - 1)
}

console.log(rangeSum(10008))