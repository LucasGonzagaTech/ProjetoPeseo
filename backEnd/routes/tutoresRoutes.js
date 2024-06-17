const express = require('express');
const router = express.Router();
const tutoresController = require('../controllers/tutoresController');

router.use('/', tutoresController);

module.exports =  router;