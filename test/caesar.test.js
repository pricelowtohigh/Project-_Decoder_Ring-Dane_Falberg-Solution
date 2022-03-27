const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar shift input parameters", () => {
    it("is a function", () => {
        expect(caesar).to.be.a('function');
    })

    it("should correctly encode single word input", () => {
        const shift = 4;
        const input = "input";
        const actual = caesar(input, shift);
        const expected = "mrtyx"
        expect(actual).to.equal(expected)
    })

    it("should correctly encode input that includes spaces, numbers, and punctuation", () => {
        const shift = 4;
        const input = "input number 1.";
        const actual = caesar(input, shift);
        const expected = "mrtyx ryqfiv 1."
        expect(actual).to.equal(expected)
    })
})
