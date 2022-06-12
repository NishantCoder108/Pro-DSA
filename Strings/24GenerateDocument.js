// Method 1
// O(m * (n + m))time | O(1)space
//where n is the number of characters and m is the length of the document

input: characters = "Bste!hetsi ogEAxpelrt x ";
document = "AlgoExpert is the Best!";
output: true;

function generateDocument(characters, document) {
  // Write your code here.

  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);

    if (documentFrequency > charactersFrequency) return false;
  }
  return true;
}

function countCharacterFrequency(character, target) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
}

//   ------------Method 2---------
// O(c * (n + m)) time | O(c)space
// where n is the number of characters , m is the length of the document , and c is the number of unique character in the
// document
function generateDocument(characters, document) {
  // Write your code here.
  const alreadyCounted = new Set();

  for (const character of document) {
    if (character in alreadyCounted) continue;

    const documentFrequency = countCharacterFrequency(character, document);
    const characterFrequency = countCharacterFrequency(character, characters);

    if (documentFrequency > characterFrequency) return false;

    alreadyCounted.add(character);
  }
  return true;
}

function countCharacterFrequency(character, target) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }

  return frequency;
}

//-----------Method 3------------
// O(n + m) time | O(c)space
//where n is the number of characters , m is the length of the document , and c is the
// the number of unique characters in the character string
function generateDocument(characters, document) {
  // Write your code here.

  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character]--;
  }

  return true;
}

