const Joi = require("joi");

module.exports = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    passoword: Joi.string().required()
  }
};
