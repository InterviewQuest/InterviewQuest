const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/addUser', userController.addUser);

router.post("/forgetpassword", userController.forgetPassword)

module.exports = router;