import express from 'express';

const usersRouter = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
usersRouter.post('/', (req, res) => {
  res.send('Register a user');
});

export default usersRouter;
