const Ajv = require("ajv");
const ajv = new Ajv();

const signUpSchema = {
    type: "object",
    properties: {
        username: {
            type: "string"
        },
        email: {
            type: "string"
        },
        password: {
            type: "string"
        }
    },
    required: ["username", "email", "password"]
}

module.exports = ajv.compile(signUpSchema);