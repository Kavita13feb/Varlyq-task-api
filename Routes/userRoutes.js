
const express = require('express');
const { RegisterController } = require('../Controllers/RegisterController');
const { LoginController } = require('../Controllers/LoginController');

const UserRouter = express.Router();

UserRouter.post('/register',RegisterController);
UserRouter.post('/login',LoginController);



module.exports = {RegisterRouter};
