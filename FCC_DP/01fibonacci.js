//Find Fibonacci of nth numbers

const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 2) + fib(n - 1);
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(80)); //here it is not fast working

//Optimize
//Use Dynamic Programming
//Dp = Recursion + Storage

const fibDp = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = fibDp(n - 1, memo) + fibDp(n - 2, memo);
//   console.log("memo ", memo);
  return memo[n];
};

console.log(" 0", fibDp(0));//0 1
console.log(" 1", fibDp(1));//1 1
console.log(" 2", fibDp(2));//2 1
console.log(" 3", fibDp(3));//3 2
console.log(" 30", fibDp(30));//30 832040
console.log(" 50", fibDp(50));//50 12586269025
console.log(" 150", fibDp(150));//150 9.969216677189305e+30
console.log(" 300", fibDp(300));//300 2.2223224462942035e+62

console.log("fib", fib);//fib [Function: fib]







