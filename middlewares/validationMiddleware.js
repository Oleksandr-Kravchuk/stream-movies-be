const Joi = require('joi');

const registrationValidator = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .min(3)
        .max(40)
        .optional(),
    password: Joi.string()
        .min(3)
        .max(35)
        .optional(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registrationValidator,
};
