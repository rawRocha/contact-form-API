const express = require('express');
const route = express.Router();

const formDataController = require('../controllers/formDataController');

route.post('/submit-form', formDataController.submitForm);

route.get('/', formDataController.index);

module.exports = route;
