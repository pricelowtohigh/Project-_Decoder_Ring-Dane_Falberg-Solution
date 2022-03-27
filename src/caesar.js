// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const paddedAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";  // the format of this padded alphabet allows us to 'wrap around' if our shift value would take us beyond the end of the alphabet

  function alphabetSwitch (letter, alphabetA = alphabet, alphabetB) {
    // function that takes in a letter and a secondary alphabet and outputs the equivalent letter from the other alphabet. assumes the standard alphabet as the starting alphabet
    let output = "";
    let index;
    for (let each in alphabetA) {
      const letterA = alphabetA[each]
      if (letter === letterA) {
        index = each;
      }
    }
    output = alphabetB[index];
    return output;
  }

  function caesar(input, shift, encode = true) {
    if (encode && shift != 0 && shift < 25 && shift > -25) {                  // checking that we want to encode a message and have an appropriate set of input parameters
      const newInput = input.toLowerCase();                                   // normalizing to lower case
      let output = "";
      let newAlphabet = [];
      const letters = alphabet.split("");                                     // assigning each individual letter to an array
      newAlphabet = letters.map(letter => {                                   // mapping to a new array to create a new, 'shifted' alphabet array
        const value = letters.indexOf(letter)                                 // finding the index number of the current letter in the standard alphabet
        return paddedAlphabet[26 + value + shift]                             // taking that index number and adding the shift value AND adding 26 to it to place it in the center of our padded alphabet *see above
    })
      for (let each in newInput) {                                            // for each letter in our lower-case-normalized input
        const letter = newInput[each];
        const newLetter = alphabetSwitch(letter, alphabet, newAlphabet)       // use the alphabetSwitch function defined about to output the equivalent letter in our shifted alphabet
        if (newAlphabet.includes(letter)) {
          output += newLetter
        } else {
          output += letter;
        }
      }
      return output;
    } else if (!encode && shift != 0 && shift < 25 && shift > -25) {          // checking that we want to decode a message and have an appropriate set of input parameters
      const newInput = input.toLowerCase();
      let output = "";
      let newAlphabet = [];
      const letters = alphabet.split("");
      newAlphabet = letters.map(letter => {
        const value = letters.indexOf(letter)
        return paddedAlphabet[26 + value + shift]
    })
      for (let each in newInput) {
        const letter = newInput[each];
        const newLetter = alphabetSwitch(letter, newAlphabet, alphabet)
        if (newAlphabet.includes(letter)) {
          output += newLetter
        } else {
          output += letter;
        }
      }
      return output;
    } else {
      return false;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
