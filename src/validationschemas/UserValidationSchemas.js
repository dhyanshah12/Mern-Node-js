const zod = require("zod")
const numberregx = /^[0-9]{10}$/
const nameregex = /^[a-zA-Z]+$/;
const userValidationSchema = zod.object({

    name:zod.string().min(3),
    email: zod.string().email(),
    password: zod.string().min(6),
    age:zod.number().min(18).max(60),
    bloodGroup: zod.string(),
    address: zod.object({
        city: zod.string(),
        state: zod.string(),
    }),
    skills: zod.array(zod.string()),
    number: zod.string().regex(numberregx),
    nameregex : zod.string().regex(nameregex)
}).strict()

module.exports = userValidationSchema