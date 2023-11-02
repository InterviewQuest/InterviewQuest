const express = require('express');
const router = express.Router();

const algoController = require('../controllers/algoController');


router.get('/getAlgo', algoController.getAlgo);


router.post('/addAlgo', algoController.addAlgo);



module.exports = router;