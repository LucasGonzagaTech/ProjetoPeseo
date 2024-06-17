const express = require('express');
const router = express.Router();
const aulasPendentesController = require('../controllers/aulasPendentesContoller');

router.use('/', aulasPendentesController);

module.exports =  router;