//Method 1

function firstNonRepeatingCharacter(string) {
    // Write your code here.
  //O(n^2 )time | O(1)space
    for(let idx = 0; idx < string.length; idx++){
  
      let foundDuplicate = false;
      for(let idx2 = 0; idx2 < string.length; idx2++){
        
        if(string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true;
      }
  
      if(!foundDuplicate) return idx;
    }
    return -1;
  }
  




  //--------Method 2 ----------
  //O(n)time | O(1)space   
//the constant space is because the input string only has lowercase english alphabet
//our hash table will never have more than 26 character frequencies
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    const characterFrequencies = {};
  
    for(const character of string){
      if(!(character in characterFrequencies))characterFrequencies[character] = 0;
      characterFrequencies[character]++;
    }
   for(let idx = 0; idx < string.length; idx++){
     const character = string[idx];
  
     console.log("character", character, "idx",idx)
     if(characterFrequencies[character] === 1)return idx;
   }
  
    return -1
  }
  
