const jwt = require('jsonwebtoken');
const {RegisterError} = require('../utils/customErrors');
const {JWT_SECRET} = require('../config');

const authMiddleware = async (req, res, next) => {
  const {
    authorization,
  } = req.headers;
  if (!authorization) {
    throw new RegisterError('Please, provide "authorization" header');
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    throw new RegisterError('Please, include token to request');
  }

  const tokenPayload = jwt.verify(token, JWT_SECRET);

  req.user = {
    userId: tokenPayload._id,
  };

  next();
};

module.exports = {
  authMiddleware,
};
