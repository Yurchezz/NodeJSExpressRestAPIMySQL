const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

router.get('/',  awaitHandlerFactory(driverController.getAllOrders)); // localhost:3000/api/v1/users


//router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin)); // localhost:3000/api/v1/users/login

module.exports = router;