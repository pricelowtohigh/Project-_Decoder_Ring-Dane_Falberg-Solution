const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius parameters", () => {
    it("should be a function", () => {
        expect(polybius).to.be.a("function");
    })

    it("should return false when decoding an odd amount of numbers", () => {
        const input = 4244151;
        const actual = polybius(input, encode = false);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it("should encode both I and J to 42", () => {
        const input = "i and j"
        const expected = "42 113341 42"
        const actual = polybius(input)
        expect(actual).to.eql(expected)
    })
})