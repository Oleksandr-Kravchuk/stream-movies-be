require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const {authRouter} = require('./routers/authRouter');
const {userRouter} = require('./routers/userRouter');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {asyncWrapper} = require('./utils/asyncWrapper');
const {CustomError} = require('./utils/customErrors');
const {
  PORT,
  DB_URL,
} = require('./config');

const optionsCors = {
  'origin': '*',
  'allowedHeaders': 'Content-Type,Authorization',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false,
  'optionsSuccessStatus': 200,
};

app.use(express.json());
app.use(morgan('tiny'));
app.options('*', cors(optionsCors));

app.use('/api/auth', cors(), authRouter);
app.use(asyncWrapper(authMiddleware));
app.use('/api/users', cors(), userRouter);

app.use((req, res, next) => {
  res.status(404).json({message: 'Not found'});
});

app.use((err, req, res, next) => {
  if ( err instanceof CustomError) {
    return res.status(err.status).json({message: err.message});
  }

  res.status(500).json({message: err.message});
});


const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    app.listen(PORT);
  } catch (error) {
    console.log(`Error on server startup: ${error.message}`);
  }
};

start();
