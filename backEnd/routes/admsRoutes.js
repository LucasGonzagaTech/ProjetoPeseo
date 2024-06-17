const express = require('express');
const router = express.Router();
const admsController = require('../controllers/admsController');

router.use('/', admsController);

module.exports =  router;