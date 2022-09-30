// https://docs.google.com/document/d/1q3iGyHeNzP3IDmfDubZp5vFJmdaL4-5f6HQHId55QrY/edit?usp=sharing


function minimumCharactersForWords(words) {
    // Write your code here.
    const maximumCharacterFrequencies = {};

    for (const word of words) {

        const characterFrequencies = countCharacterFrequencies(word);
        updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);

    }


    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
}


function countCharacterFrequencies(string) {
    const characterFrequencies = {};

    for (const character of string) {

        if (!(character in characterFrequencies)) {
            characterFrequencies[character] = 0;
        }

        characterFrequencies[character] += 1;
    }


    return characterFrequencies;
}



function updateMaximumFrequencies(frequencies, maximumFrequencies) {

    for (const character in frequencies) {
        const frequency = frequencies[character];

        if (character in maximumFrequencies) {
            maximumFrequencies[character] = Math.max(frequency, maximumFrequencies[character]);

        } else {
            maximumFrequencies[character] = frequency;
        }
    }
}


function makeArrayFromCharacterFrequencies(characterFrequencies) {
    const characters = [];

    for (const character in characterFrequencies) {
        const frequency = characterFrequencies[character];

        for (let idx = 0; idx < frequency; idx++) {
            characters.push(character)
        }
    }

    return characters;
}
// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
