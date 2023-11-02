const express = require('express');
const router = express.Router();

const techController = require('../controllers/techController');

router.get('/getTech', techController.getTech);
router.post('/addTech', techController.addTech);

module.exports = router;
