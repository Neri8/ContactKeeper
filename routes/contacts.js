const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');


const User = require('../models/User');
const Contact = require('../models/Contact');

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private    ,  because you have to be  logged in to access your contacts
 router.get('/', auth, async (request, response) => {
  try {
     const contacts = await Contact.find({user: request.user.id}).sort({date: -1});
    response.json(contacts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server Error');
  }
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