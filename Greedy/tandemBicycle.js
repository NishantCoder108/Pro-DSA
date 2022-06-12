function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  /*
  This condition by default for fastest total speel of tandem bicycles
  For Slowest, we sort the array in decreasing order of any array for minimum total speed
  
  */

  //for slowest
  //if(fastest) redShirtSpeeds.reverse()//we can make own function in place

  //or 
  if (fastest) reverseArrayInPlace(redShirtSpeeds);
  let Output = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    Output += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return Output;
}

//Reverse Array function in InPlace array

function reverseArrayInPlace(arr) {
  let i = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    end--;
    start++;
  }
}
