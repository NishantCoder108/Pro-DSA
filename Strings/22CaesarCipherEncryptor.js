//O(n)time | O(n)space
function caesarCipherEncryptor(string, key) {
    // Write your code here.
  
    const newLetters = [];
    const newKey = key % 26;
    console.log("new key ", newKey)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    console.log("alphabet ",alphabet)
    for(const letter of string){
      newLetters.push(getNewLetter(letter,newKey,alphabet))
    }
    console.log("new letters", newLetters)
    return newLetters.join('');
  }
  
  function getNewLetter(letter,key ,alphabet){
    const newLetterCode = alphabet.indexOf(letter) + key;
  
    console.log("new letter code ", [newLetterCode % 26])
    return alphabet[newLetterCode % 26]
  }





  //Method 2
  //O(n)time | O(n) space
  function caesarCipherEncryptor(string, key) {
    // Write your code here.
  
    const newLetters = [];
    const newKey = key % 26;
    console.log("New key", newKey);
  
    for(const letter of string){
      newLetters.push(getNewLetter(letter,newKey));
  
      console.log("New Letters Push data", newLetters)
    }
  
    return newLetters.join('');
    
  }
  
  function getNewLetter(letter,key){
    const newLetterCode = letter.charCodeAt() + key;
    return newLetterCode <= 122  ? String.fromCharCode(newLetterCode): 
      String.fromCharCode(96  + (newLetterCode % 122))
  }
  
