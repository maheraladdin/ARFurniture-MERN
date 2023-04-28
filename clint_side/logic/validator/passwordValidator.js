export const passwordValidator = (password) => {
    // Check the length of the password.
    if (password.length < 8) {
        return false;
    }

    // Check for the presence of uppercase and lowercase letters, and numbers.
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!hasUppercase || !hasLowercase || !hasNumber) {
        return false;
    }

    // The password is valid.
    return true;
}