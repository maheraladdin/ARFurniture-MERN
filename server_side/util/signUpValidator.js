const Ajv = require("ajv");
const ajv = new Ajv();

const signUpSchema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        email: {
            type: "string"
        },
        password: {
            type: "string"
        }
    },
    required: ["name", "email", "password"]
}

module.exports = ajv.compile(signUpSchema);