const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');
const UserController = require('../Controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.get('/:id', UserController.getUserId);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;