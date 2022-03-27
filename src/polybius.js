// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusAlphabet = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 42, 52, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55];                    // polybius alphabet
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function alphabetSwitch (letter, alphabetA, alphabetB) {
    // function that takes in a letter and a secondary alphabet and outputs the equivalent letter from the other alphabet. assumes the standard alphabet as the starting alphabet
    let output = "";
    let index;
    for (let each in alphabetA) {
      const letterA = alphabetA[each].toString()
      if (letter === letterA) {
        index = each;
      }
    }
    output = alphabetB[index];
    return output;
  }

  function isEven(n) {                // brief function to determine if an inputted value is divisible by 2 with no remainder and is, thus, an even number
    return Math.abs(n)%2!==1;
}

  function polybius(input, encode = true) {
    let output = "";
    if (encode) {                                                         // if we want to encode
      for (let each in input) {
        const letter = input[each];
        if (letter === "i" || letter === "j") {                          // if the current letter is either "i" or "j"
          output += 42;                                                  // encode it to 42
        } else {
          const newLetter = alphabetSwitch(letter, alphabet, polybiusAlphabet)  // if its any letter other than i or j we will run the same alphabet function we have used in the other problems to find the appropriate encoded letter
          if (alphabet.includes(letter)) {
            output += newLetter
          } else {
            output += letter;
          }
        }  
      }
      return output;
    } else {                                                                                     // this will run if we want to decode FROM a polybius message
      const newInput = input.toString()
      const oddity = isEven(newInput.split(" ").join("").length)                                 // removing the spaces to check if there is an even number of numbers inputted and this can be translated from the polybius alphabet                   
        for (let i = 0; i < newInput.length; (newInput[i] !== " ") ? i+= 2 : i ++) {             // looping through every second number the number string                                                  
          const number = newInput.substr(i, 2);                                                  // for each second number, pull out 2 characters and assign them to the const 'number'. these two numbers will then be equivalent to a letter in the polybius alphabet
          if (number === "42") {                                                                 // checking for 42
            output += "i/j";
          } else {
            const newLetter = alphabetSwitch(number, polybiusAlphabet, alphabet)                 // again using the alphabetSwitch function to go from our two-digit number to a letter in the standard alphabet
            if (alphabet.includes(newLetter)) {
              output += newLetter
            } else {
              output += " ";
            }
          }
        }
      if (oddity) {                // if the inputted string was valid for decoding (contained an even number of numbers), output the decoded message
        return output;
      } else {
        return false               // if not, return false
      } 
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
