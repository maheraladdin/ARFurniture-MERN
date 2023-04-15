const Ajv = require("ajv");
const ajv = new Ajv();

const loginSchema = {
    type: "object",
    properties: {
        email: {
            type: "string",
            pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        },
        password: {
            type: "string",
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\\\S+$).{8, 20}$"
        }
    },
    required: ["email", "password"]
}

module.exports = ajv.compile(loginSchema);