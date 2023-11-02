const express = require('express');
const router = express.Router();

const techController = require('../controllers/techController');


router.post('/getTech', techController.getTech);


module.exports = router;