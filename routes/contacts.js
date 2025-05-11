const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.addContact);

router.put('/:id', contactsController.editContact);

router.delete('/:id', contactsController.removeContact);

module.exports = router;
