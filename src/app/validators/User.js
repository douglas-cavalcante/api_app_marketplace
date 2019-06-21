const Joi = require("joi");

module.exports = {
  body: {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    passoword: Joi.string()
      .required()
      .min(6)
  }
};
