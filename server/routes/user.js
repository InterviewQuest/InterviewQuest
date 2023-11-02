const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.login);

router.post('/addUser', userController.addUser);

router.post('/forgetpassword', userController.forgetPassword);

<<<<<<< HEAD
module.exports = router;
=======
router.post("/resetpassword", userController.resetPassword)


module.exports = router;
>>>>>>> 9a5966c (new updates)
