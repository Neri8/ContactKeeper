const express = require('express');
const router = express.Router();

const user = require('../models/User');

// @route  POST api/users
// @desc   Register a user
// @access Public
router.post('/', (request, response) => {
  response.send('register a User')
});

module.exports = router;