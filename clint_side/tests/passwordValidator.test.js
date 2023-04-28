import {passwordValidator} from "../logic/validator/passwordValidator";

// test cases

describe("Password Validator", () => {

    it("Valid Password", () => {
        expect(passwordValidator("P@ssw0rd123")).toBe(true);
    });

    it("Invalid Password (Too Short)", () => {
        expect(passwordValidator("pass")).toBe(false);
    });

    it("Invalid Password (No Uppercase)", () => {
        expect(passwordValidator("password@123")).toBe(false);
    });

    it("Invalid Password (No Lowercase)", () => {
        expect(passwordValidator("PASSWORD@123")).toBe(false);
    });

    it("Invalid Password (No Number)", () => {
        expect(passwordValidator("Password")).toBe(false);
    });

});