//if they collide ,one will be destryed and remain will result , - sign show left and + sign show right

let arr1 = [11, 16, -20]; //[-20]
let arr2 = [5, 4, -2]; //[5,4]
let arr3 = [-5, 5]; //[-5,-5]

function collisionAerrow(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    } else {
      if (
        (arr[i] < 0 && stack[stack.length - 1] < 0) ||
        (arr[i] >= 0 && stack[stack.length - 1] >= 0)
        || (Math.abs(stack[stack.length - 1]) === Math.abs(arr[i]))
      ) {
        stack.push(arr[i]);
      } else {
        while (
          stack.length > 0 &&
          differentSign(stack[stack.length - 1], arr[i])
        ) {
          if (Math.abs(stack[stack.length - 1]) < Math.abs(arr[i])) {
            stack.pop();
          } else { break; }
        }

        if (
          stack.length == 0 ||
          Math.abs(arr[i]) > Math.abs(stack[stack.length - 1])
        ) {
          stack.push(arr[i]);
        }
      }
    }
  }

  return stack;
}

function differentSign(a, b) {
  if ((a > 0 && b < 0) > 0 || (a < 0 && b > 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(collisionAerrow(arr1));
console.log(collisionAerrow(arr2));
console.log(collisionAerrow(arr3));

// function collisionAerrow(arr) {
//   let stack = [];

//   for (const value of arr) {
//     //sign is checking
//     if (value > 0) {
//       stack.push(value);
//     } else {
//       //if sign is different
//       //value will be compare ,if stack top value is less than value then pop and push array value
//       if (Math.abs(stack[stack.length - 1]) < Math.abs(value)) {
//         stack.pop();
//         stack.push(value);
//       }
//     }
//   }

//   return stack;
// }

// console.log(collisionAerrow(arr1));
// console.log(collisionAerrow(arr2));
// console.log(collisionAerrow(arr3));
