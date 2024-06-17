const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulasController');

router.use('/', aulasController);

module.exports =  router;