import express from 'express';

const authRouter = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
authRouter
  .get('/', (req, res) => {
    res.send('Get logged in user');
  })

  // @route   POST api/auth
  // @desc    Auth user and get token
  // @access  Public
  .post('/', (req, res) => {
    res.send('Log in user');
  });

export default authRouter;
