import express from 'express';

const contactsRouter = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
contactsRouter
  .get('/', (req, res) => {
    res.send('Get all contacts');
  })

  // @route   POST api/contacts
  // @desc    Add new contact
  // @access  Private
  .post('/', (req, res) => {
    res.send('Add contact');
  })

  // @route     PUT api/contacts/:id
  // @desc      Update contact
  // @access    Private
  .put('/:id', (req, res) => {
    res.send('Update contact');
  })

  // @route     DELETE api/contacts/:id
  // @desc      DELETE contact
  // @access    Private
  .delete('/:id', (req, res) => {
    res.send('Delete contact');
  });

export default contactsRouter;
