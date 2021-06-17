const express = require('express');
const router = express.Router();

// @route  GET api/auth
// @desc   Get logged in user
// @access Private  ,   because we are accesing a user which is logged in 
router.get('/', (request, response) => {
  response.send('get logged in user')
});


// @route  POST api/auth
// @desc   Auth user and get token
// @access Public  
router.post('/', (request, response) => {
  response.send('log in user')
});




module.exports = router;