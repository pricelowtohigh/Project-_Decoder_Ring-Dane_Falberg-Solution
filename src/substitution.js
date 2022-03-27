// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function alphabetSwitch (letter, alphabetA, alphabetB) {
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

  function isUnique(input) {                                                // function to determine if the input string contains no duplicate characters
    for (i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
        return false;
      }
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if (encode && alphabet && alphabet.length === 26 && isUnique(alphabet)) {               // checks if we want to encode rather than decode and if an alphabet was correctly passed in with the proper length and uniqueness
      let output = "";
      for (let each in input) {
        const letter = input[each];
        const newLetter = alphabetSwitch(letter, theAlphabet, alphabet)                     // for each letter in the input switch it to the equivalent letter in the alternate alphabet
        if (alphabet.includes(letter)) {                                                    // if the character is not a space or character not contained in the alternate alphabet
          output += newLetter                                                               // if its a valid character add it to the output
        } else {
          output += letter;                                                                 // if its a space or otherwise invalid letter, it wont be translated and simply added to the output as is
        }
      }
      return output;
    } else if (!encode && alphabet && alphabet.length === 26 && isUnique(alphabet)) {       // this will run if the function is set to decode rather than encode, also checks if a valid alphabet has been inputted
      let output = "";
      for (let each in input) {
        const letter = input[each];
        const newLetter = alphabetSwitch(letter, alphabet, theAlphabet)
        if (alphabet.includes(letter)) {
          output += newLetter
        } else {
          output += letter;
        }
      }
      return output;
    } else {
      return false
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
