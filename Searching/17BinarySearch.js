function binarySearch(array, target) {
  // Write your code here.

  let startIdx = 0;
  let endIdx = array.length - 1;
  if (array[startIdx] > array[endIdx]) return -1;

  while (startIdx <= endIdx) {
    let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

    if (target < array[midIdx]) {
      endIdx = midIdx - 1;
    } else if (target > array[midIdx]) {
      startIdx = midIdx + 1;
    } else {
      console.log("Mid Idx", midIdx, "startIdx", startIdx, "End Idx", endIdx);
      return midIdx;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
