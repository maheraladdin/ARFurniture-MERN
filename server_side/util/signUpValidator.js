const Ajv = require("ajv");
const ajv = new Ajv();

const signUpSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            unique: true
        },
        email: {
            type: "string",
            pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
            unique: true
        },
        password: {
            type: "string",
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"
        }
    },
    required: ["name", "email", "password"]
}

module.exports = ajv.compile(signUpSchema);