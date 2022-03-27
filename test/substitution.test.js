const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution input parameters", () => {
    it("is a function", () => {
        expect(substitution).to.be.a('function');
    })
    it("should return false if alphabet is not 26 characters", () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz1";
        const message = "message";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })
    it("should return false if alphabet contains repeat characters", () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyy";
        const message = "message";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })
    it("should properly account for spaces, numbers, and special characters", () => {
        const alphabet = "fihgjklmnqpr*93uvwxyza2cd8";
        const message = "the message";
        const expected = "tme *essfle";
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    })
})
