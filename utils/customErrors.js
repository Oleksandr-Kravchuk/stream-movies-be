/* eslint-disable require-jsdoc */
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
  }
}

class InvalidRequestError extends CustomError {
  constructor(message = 'Invalid request') {
    super(message);
    this.status = 400;
  }
}

class InvalidCredentialsError extends CustomError {
  constructor(message = 'Invalid password or username') {
    super(message);
    this.status = 400;
  }
}

class RegisterError extends CustomError {
  constructor(message = 'Invalid request') {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  CustomError,
  InvalidRequestError,
  InvalidCredentialsError,
  RegisterError,
};
