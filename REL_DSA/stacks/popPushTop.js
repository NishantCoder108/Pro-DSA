let arr = [[1, 2], [1, 3], [2], [1, 7], [3]];

/**
 * 1 push
 * 2 pop
 * 3 top
 */

function popPushTop(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 1) {
      resArr.push(arr[i][1]);
    } else if (arr[i][0] === 2) {
      resArr.pop();
    } else {
      console.log(resArr[resArr.length - 1]);
    }
  }
  return resArr;
}

console.log(popPushTop(arr));

