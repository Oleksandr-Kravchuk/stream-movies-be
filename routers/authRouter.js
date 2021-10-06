const express = require('express');
const router = new express.Router();
const {
  registerUser,
  loginUser,
} = require('../controllers/authController');
const {asyncWrapper} = require('../utils/asyncWrapper');
const {registrationValidator} = require('../middlewares/validationMiddleware');

router.post('/register', asyncWrapper(registerUser));
router.post('/login', registrationValidator, asyncWrapper(loginUser));

module.exports = {
  authRouter: router,
};
