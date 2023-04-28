export const emailValidator = (email) => {
    // Check if the email address is empty.
    if (!email) {
        return false;
    }

    // Check if the email address has a valid format.
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!regex.test(email)) {
        return false;
    }

    // The email address is valid.
    return true;
}