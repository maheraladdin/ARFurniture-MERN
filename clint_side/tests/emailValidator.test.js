import {emailValidator} from "../logic/validator/emailValidator";

// test cases
describe("Email Validator", () => {

    it('Valid Email', () => {
        expect(emailValidator("johndoe@example.com")).toBe(true);
    });

    it("Invalid Email (Empty)", () => {
        expect(emailValidator("")).toBe(false);
    });

    it("Invalid Email (No @)", () => {
        expect(emailValidator("johndoeexample.com")).toBe(false);
    });

    it("Invalid Email (No Domain)", () => {
        expect(emailValidator("johndoe@")).toBe(false);
    });

    it("Invalid Email (No Username)", () => {
        expect(emailValidator("@example.com")).toBe(false);
    });

    it("Invalid Email (No TLD)", () => {
        expect(emailValidator("johndoe@example")).toBe(false);
    });

});


