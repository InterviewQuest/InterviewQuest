const express = require('express');
const router = express.Router();

const techController = require('../controllers/techController');


router.get('/getTech', techController.getTech);


module.exports = router;