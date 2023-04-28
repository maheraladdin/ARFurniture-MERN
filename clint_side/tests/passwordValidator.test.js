import {passwordValidator} from "../logic/validator/passwordValidator";

test("Valid Password", () => {
    expect(passwordValidator("P@ssw0rd123")).toBe(true);
});

test("Invalid Password (Too Short)", () => {
    expect(passwordValidator("pass")).toBe(false);
});

test("Invalid Password (No Uppercase)", () => {
    expect(passwordValidator("password@123")).toBe(false);
});

test("Invalid Password (No Lowercase)", () => {
    expect(passwordValidator("PASSWORD@123")).toBe(false);
});

test("Invalid Password (No Number)", () => {
    expect(passwordValidator("Password")).toBe(false);
});