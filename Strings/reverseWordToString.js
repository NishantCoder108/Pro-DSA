//https://leetcode.com/problems/reverse-words-in-a-string/


function reverseWordsInString(s) {
    const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === ' ') {
	    // We found the space, put word in front (if there is any)
        // word.length > 0 && ret.unshift(word.join(''));
        ret.unshift(word.join(''));
		// Reset the current word
        word = [];
      }
    else {
	  // Add characters to the current word
      word.push(s.charAt(i));
    }

  
  
  }
  // If there is current word exists, add it in front
  // word.length > 0 && ret.unshift(word.join(''));
     ret.unshift(word.join(''));
  return ret.join(' ');
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;



//Other Method-------------------------
function reverseWordsInString(string) {
    // Write your code here.
  
    let wordArr = []
    let whereToStart = 0;
    for (let i = 0; i < string.length; i++) {
  
      if(string[i] == " "){
        
        wordArr.push(string.slice(whereToStart,i));
        whereToStart = i;
  
        
      }else if(string[whereToStart] == " "){
        wordArr.push(" ");
        whereToStart = i
      }
    }
   wordArr.push(string.slice(whereToStart));
   console.log(wordArr)
    
    reverse(wordArr);
    
    return wordArr.join("")
  }
  
  
  function reverse(arr){
     let start = 0; 
     let end = arr.length -1;
  
    while(start< end){
  
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      start++;
      end--
    }
    console.log("arr",arr)
  }
  // Do not edit the line below.
  exports.reverseWordsInString = reverseWordsInString;
  


  /*

First Method :- approach , we can split reverse and join 


Second Method :- Approach , we can try to find between space , and push to in new array,and finally join().

Third  Method :- Approach , we can use shift and unshift method ,for pushing in new array
                we iterate loop ,over array. if empty , then we push empty string in array. if not empty, than we push 
                in other array till , not empty. and finally return arr.join()

  */