//O(n)time | O(n)space

function runLengthEncoding(string) {
  // Write your code here.
  const encodedStringCharacters = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }

    currentRunLength++;
  }

  //handle the last Run
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);

  return encodedStringCharacters.join("");
}

input: "AAAAAAAAAAAAABBCCCCDD";
output: "9A4A2B4C2D";
