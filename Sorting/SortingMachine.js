let N = 3;
let arr = [1, 0, 0];

let sortCount = 0;
let sortArr = false;

for (let i = 0; i < N; i++) {
  if (arr[i] <= arr[i + 1]) {
    sortArr = true;
  } else {
    sortArr = false;
    break;
  }
}

if (!sortArr) {
  console.log(" i am not sort arr");

  for (let i = 0; i < N; i++) {
    if (arr[i] >= arr[i + 1]) {
      swap(i, i + 1, arr, sortCount++);
      // sortCount++
    }
  }

  console.log(sortArr);
  console.log(sortCount);
  console.log(arr);
} else {
  //if they are sort arr
  console.log(sortArr);
  console.log(sortCount);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}
