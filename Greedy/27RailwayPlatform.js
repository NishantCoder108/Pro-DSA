//https://ideone.com/9dGZOk#stderr
function railwayPlatform(arrival, departure){
    arrival.sort((a,b) => a - b);
    departure.sort((a,b) => a - b);

    const totalNumOfTrain = arrival.length;
    let arrivalIdx = 1;
    let departureIdx = 0;


    let minNumberOfPlatform =  1;
    let currentNumPlatform =  1;

    while(arrivalIdx < totalNumOfTrain  && departureIdx < totalNumOfTrain ){

        if(arrival[arrivalIdx] <= departure[departureIdx]){
            currentNumPlatform++;
            arrivalIdx++;
        }else if(arrival[arrivalIdx] > departure[departureIdx]){
            currentNumPlatform--;
            departureIdx++;
        }


        if(currentNumPlatform > minNumberOfPlatform) minNumberOfPlatform = currentNumPlatform;
    }

    return minNumberOfPlatform;
}

input : arrival = [900 ,940  ,950  ,1100 ,1500 ,1800]
        departure = [910 ,1200 ,1120 ,1130 ,1900 ,2000 ]

output : 3        
console.log(railwayPlatform(arrival,departure))

/*
2. Railway Platform

Problem Statement

Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits. 
We are given two arrays that represent the arrival and departure times of trains that stop.

 

Constraint 

 

Input should be in the time format (hours:minutes) format

 

Input Format

           Two arrays separated by newline and each array element separated by space

 

Output Format

Integer

 

Explanation

From the below input default 1 track should be free for train to be arrived

9:00 => 9:10 (default track is booked and it will be released at 9:10)
9:40 => 12:00 (default track is released and it is free to use the default track so far required track is 1)
9:50 => 11:20 (Need one more track as the default track is not free at that interval so far required track is 2)
11:00 => 11:30 (Need one more track as the existing track is not free at that interval so far required track is 3)
15:00 => 19:00 (No additional track is required since all tracks are free at that interval so far required track is 3)
18:00 => 20:00 (No additional track is required since all tracks are free at that interval so far required track is 3)
 

So, the output is 3

 

Sample Input 1 :

900 940  950  1100 1500 1800  (arrival)

910 1200 1120 1130 1900 2000  (departure)

 

  

output :  

3

 

Sample Input 2 :

900 940

910 1200

 

output :  

1
*/

// Program to find minimum number of platforms
// required on a railway station

function max(a, b) {
    if (a == b) return a;
    else {
      if (a > b) return a;
      else return b;
    }
  }
  
  // Returns minimum number of platforms required
  function findPlatform(arr, dep, n) {
    // plat_needed indicates number of platforms
    // needed at a time
    var plat_needed = 1,
      result = 1;
    var i = 1,
      j = 0;

  
    // run a nested loop to find overlap
    for (var i = 0; i < n; i++) {
      // minimum platform
      plat_needed = 1;
  
      for (var j = i + 1; j < n; j++) {
        // check for overlap
        if (max(arr[i], arr[j]) <= min(dep[i], dep[j])) plat_needed++;
      }
  
      // update result
      result = max(result, plat_needed);
    }
  
    return result;
  }
  
  let arr1 = readline().split(" ").map(Number);
  let arr2 = readline().split(" ").map(Number);
  
  console.log(findPlatform(arr1, arr2, arr1.length));
  
  /**
   function railways (arr, dep, n) {
      arr = arr.sort((a,b) => a-b);
      dep = dep.sort((a,b) => a-b);
  let pfCount = 1;
  let result = 1;
  let i = 1;
  let j = 0;
   while (i < n && j < n)
  {
      if (arr[i] <= dep[j])
      {
          pfCount++;
          i++;
      }
       else if (arr[i] > dep[j])
      {
          pfCount--;
          j++;
      }
       if (pfCount > result)
          result = pfCount;
  }
  return result;
  }
   */
  
  //git clone -b master repo_link
  

process.stdin.resume();
process.stdin.setEncoding('utf8');


let currentLine = 0;
let standardInputString = '';


function readLine(){
	return standardInputString[currentLine++];
}
process.stdin.on("data", rawData =>{
	standardInputString +=rawData;
	
});


process.stdin.on('end' , _=> {
	standardInputString = standardInputString.trim().split("\n").map(line => line.trim());
	
	main();
});

function main(){

let tc = parseInt(readLine());
let i = 0;
while(i < tc){

	let arrival = readLine().split(' ').map(Number);
	let departure = readLine().split(' ').map(Number);
	

	const totalNumOfTrain = arrival.length;
	
	let arrivalIdx = 1;
	let departureIdx = 0;
	
	
	let minNumOfPlatform = 1;
	let currentNumOfPlatform = 1;
	
	while((arrivalIdx < totalNumOfTrain)   &&  (departureIdx < totalNumOfTrain)){
		
		if(arrival[arrivalIdx] <= departure[departureIdx] ){
			currentNumOfPlatform++;
			arrivalIdx++;
			
		}else if(arrival[arrivalIdx]  > departure[departureIdx]){
			
			currentNumOfPlatform--;
			departureIdx++;
		}
		
		
	
		minNumOfPlatform = Math.max(currentNumOfPlatform  , minNumOfPlatform);
	}
	console.log(minNumOfPlatform);
	
	
	
	
	
	
i++;	
}

}
// your code goes here
