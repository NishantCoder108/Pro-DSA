//first unique element

arr = [1,1,1,2,2,3,5,5,1,4]//3


let mapFun ={}

for(let i= 0; i < arr.length; i++){

    if(mapFun[arr[i]] != undefined){
        mapFun[arr[i]] += 1
    }else{
        mapFun[arr[i]] = 1;
    }
}


console.log(mapFun)//{ '1': 4, '2': 2, '3': 1, '4': 1, '5': 2 }

let first;
for(let i= 0; i<arr.length;i++){
     
    if(mapFun[arr[i]]  === 1){
        first = arr[i]
       break;
    }


}
console.log(first)