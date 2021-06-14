import express from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

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
  .post(
    '/',
    [
      body('email', 'Please include a valid email').isEmail(),
      body('password', 'Password is required').exists(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
          user: user.id,
        };

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

export default authRouter;
