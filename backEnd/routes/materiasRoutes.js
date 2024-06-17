const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materiasController');

router.use('/', materiasController);

module.exports =  router;