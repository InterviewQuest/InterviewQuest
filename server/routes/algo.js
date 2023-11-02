const express = require('express');
const router = express.Router();

const algoController = require('../controllers/algoController');


router.post('/getAlgo', algoController.getAlgo);


router.post('/addAlgo', algoController.addAlgo);

router.post('/updateAlgo', algoController.updateAlgo);

router.post('/updateSolved', algoController.updateSolved);



module.exports = router;
