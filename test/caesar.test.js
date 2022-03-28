const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar shift input parameters", () => {
    it("is a function", () => {
        expect(caesar).to.be.a('function');
    })
    it("should return false if the shift is 0", () => {
        const message = "message";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      })
    it("should correctly encode single word input", () => {
        const shift = 4;
        const input = "input";
        const actual = caesar(input, shift);
        const expected = "mrtyx"
        expect(actual).to.equal(expected)
    })
    it("should return false if the shift amount is greather than 25", () => {
        const message = "input";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    })
      it("should return false if the shift amount is less than -25", () => {
        const message = "input";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    })
    it("should correctly encode input that includes spaces, numbers, and punctuation", () => {
        const shift = 4;
        const input = "input number 1.";
        const actual = caesar(input, shift);
        const expected = "mrtyx ryqfiv 1."
        expect(actual).to.equal(expected)
    })
    it("should shift past the end of the alphabet", () => {
        const message = "message";
        const shift = 14;
        const actual = caesar(message, shift);
        const expected = "asggous";
  
        expect(actual).to.equal(expected);
      })
      it("should handle a negative shift beyond the beginning of the alphabet", () => {
        const message = "aardvark";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "xxoasxoh";
  
        expect(actual).to.equal(expected);
      })
})
