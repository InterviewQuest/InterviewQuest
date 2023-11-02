const express = require('express');
const router = express.Router();

const techController = require('../controllers/techController');

router.get('/getTech', techController.getTech);
router.post('/addTech', techController.addTech);


router.post('/getTech', techController.getTech);

router.patch('/updateNotes', techController.updateNotes);
router.patch('/updateGreen', techController.updateGreen);
router.patch('/updateTech', techController.updateTech);

router.post('/addTech', techController.addTech);


module.exports = router;

