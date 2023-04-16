const Ajv = require("ajv");
const ajv = new Ajv();

const loginSchema = {
    type: "object",
    properties: {
        email: {
            type: "string"
        },
        password: {
            type: "string"
        }
    },
    required: ["email", "password"]
}

module.exports = ajv.compile(loginSchema);