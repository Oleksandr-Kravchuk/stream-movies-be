const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  friendsId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      unique: false,
    }],
  },
  favoriteMovies: {
    type: [{
      type: Object,
    }],
  },
});

module.exports = {
  User,
};
