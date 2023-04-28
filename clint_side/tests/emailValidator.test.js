import {emailValidator} from "../logic/validator/emailValidator";

test("Valid Email", () => {
    expect(emailValidator("johndoe@example.com")).toBe(true);
})

test("Invalid Email (Empty)", () => {
    expect(emailValidator("")).toBe(false);
});

test("Invalid Email (No @)", () => {
    expect(emailValidator("johndoeexample.com")).toBe(false);
});

test("Invalid Email (No Domain)", () => {
    expect(emailValidator("johndoe@")).toBe(false);
});

test("Invalid Email (No Username)", () => {
    expect(emailValidator("@example.com")).toBe(false);
});

test("Invalid Email (No TLD)", () => {
    expect(emailValidator("johndoe@example")).toBe(false);
});


