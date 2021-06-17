const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private    ,  because you have to be  logged in to access your contacts
router.get('/', (request, response) => {
  response.send('Get all contacts')
});


// @route  POST api/contacts
// @desc   Add new contact
// @access Private    ,  because you have to be  logged in to access your contacts
router.post('/', (request, response) => {
  response.send('Add new contact')
});


// @route  PUT api/contacts/:id
// @desc   update contacts
// @access Private    ,  because you have to be  logged in to access your contacts
router.put('/:id', (request, response) => {
  response.send('Update contact')
});


// @route  DELETE api/contacts/:id
// @desc   delete contacts
// @access Private    ,  because you have to be  logged in to access your contacts
router.delete('/:id', (request, response) => {
  response.send('Delete contacts')
});

module.exports = router;