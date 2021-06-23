const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');


const User = require('../models/User');

// @route  GET api/auth
// @desc   Get logged in user
// @access Private  ,   because we are accesing a user which is logged in 
router.get('/', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.id).select('-password');
    response.json(user);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({message: 'Server Error'})
  }
});


// @route  POST api/auth
// @desc   Auth user and get token
// @access Public  
router.post('/', [check('email', 'Please include a valid email').isEmail(),
check('password', 'Password is required').exists()],
 async (request, response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()})
  }

  const {email, password} = request.body;

  try {
    let user = await User.findOne({email});

    if (!user) {
      return response.status(400).json({message: 'Invalid credentials'})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return response.status(400).json({message: 'Invalid credentials'})
    }

    const payLoad = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payLoad, config.get('jwtSecret'), {
      expiresIn: 360000
    }, (error, token) => {
      if (error) 
        throw error;
        response.json({token})
      
    });

  } catch (error) {
    console.error(error.message);
    reponse.status(500).send('Server error')
  }

});




module.exports = router;