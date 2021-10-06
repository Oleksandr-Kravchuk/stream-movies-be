const express = require('express');
const router = new express.Router();
const {
  getFriends,
  getUser,
  addFriend,
  findUsers,
  removeFriend,
  addMovie,
  getFavoriteMovie,
  removeMovie,
  // deleteUser,
  changeUserProfile,
} = require('../controllers/userController');
const {asyncWrapper} = require('../utils/asyncWrapper');

router.get('/me/friends', asyncWrapper(getFriends));
router.get('/findUsers', asyncWrapper(findUsers));
router.get('/me', asyncWrapper(getUser));
router.get('/me/favorite', asyncWrapper(getFavoriteMovie));
router.patch('/me/addFriend', asyncWrapper(addFriend));
router.patch('/me/addMovie', asyncWrapper(addMovie));
router.patch('/me/removeMovie', asyncWrapper(removeMovie));
router.patch('/me/removeFriend', asyncWrapper(removeFriend));
router.patch('/me', asyncWrapper(changeUserProfile));

module.exports = {
  userRouter: router,
};
