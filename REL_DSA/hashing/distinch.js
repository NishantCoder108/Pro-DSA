arr = [1,1,2,2,3,3,4,5,6];

let distinct = {}
for(let i= 0; i< arr.length; i++){

  if(arr[i]  in distinct){
    distinct[arr[i]] = 0;
  }

  distinct[arr[i]] = 0


}
console.log(Object.keys(distinct))

// let arr = 