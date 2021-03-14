const Joi = require("@hapi/joi");

//register validation


const registerValidation = data => {
    const schema = Joi.object({

        name: Joi.string()
        .min(4)
        .required(),
        year : Joi.string()
        .max(1)
        .required(),
        section: Joi.string()
        .max(1)
        .required(),
        emailId : Joi.string()
        .min(6)
        .required()
        .email(),
        password : Joi.string()
        .min(6)
        .required(),
        regNo : Joi.string()
        .max(12)
        .min(12)
        .required(),
        phoneNo : Joi.string().min(10).max(10).required()
})

return schema.validate(data)


}

//login validation

const loginValidation = data => {
    const schema = Joi.object({
        
        password : Joi.string()
        .min(6)
        .required(),

        regNo : Joi.string()
        .max(12)
        .min(12)
        .required(),

})

return schema.validate(data)


}

module.exports = registerValidation
module.exports = loginValidation