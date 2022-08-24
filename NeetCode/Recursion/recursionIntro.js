//Product of array

let arr = [2, 3, 4, 2];

function arrProduct(arr, sizeOfArr) {
  if (arr.length < 1) return -1;

  if(sizeOfArr > arr.length)return -1
  //   if(sizeOfArr<=0){
  //     return 1
  //   }

  if (sizeOfArr == 1) {
    return arr[0];
  }

  let d = arr[sizeOfArr - 1] * arrProduct(arr, sizeOfArr - 1);
  return d;
}

console.log(arrProduct([...arr,5,6], 9));

function productOfArray(arr, size) {
  if (size <= 0) {
    return -1;
  }

  if (size == 1) {
    return arr[0];
  }

  return arr[size - 1] * productOfArray(arr, size - 1);
}

console.log(productOfArray([2, 5, 4, 3, 2], 5));





//Factorial Finding
// n! = n * (n-1)!


function findFactorial(n){

    if(n <= 1){
        return 1
    }
    return n * findFactorial(n - 1)
}

console.log(findFactorial(5))//5! = 5 * 4 * 3 * 2 * 1 = 120



//Find Fibonacci Series

function fibonacci(n){

    if(n <=0)return 0

    if(n ===1)return 1

    return fibonacci(n -1) + fibonacci(n -2)
}


console.log(fibonacci(5))
// 0 1 1 2 3 5 8 13 21
// fib(n-1) + fib(n -2) = fib(n)
// fib(4)  + fib(2) = fib(5)



