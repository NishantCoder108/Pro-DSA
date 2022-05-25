// Javascript program to count the number
// of subarrays such that Xor of
// all the elements of that subarray
// is equal to sum of the elements

// Function to count the number
// of subarrays such that Xor of
// all the elements of that subarray
// is equal to sum of the elements

/**
 * Count , subarray sum equal to xor sum of subarray
 */
let arr = [1, 2, 3, 4, 5];

function XorSumCount(arr) {
  // Maintain two pointers
  // left and right
  let right = 0,
    ans = 0,
    num = 0;

  // Iterating through the array
  for (let left = 0; left < arr.length; left++) {
    // Calculate the window
    // where the above condition
    // is satisfied
    while (right < arr.length && num + arr[right] == (num ^ arr[right])) {
      num += arr[right];
      right++;
    }
    // Count will be (right-left)
    ans += right - left;
    if (left == right) right++;
    // Remove the previous element
    // as it is already included
    else num -= arr[left];
  }

  return ans;
}
console.log(XorSumCount(arr));
