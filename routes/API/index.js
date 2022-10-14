const express = require('express');
const routes = express.Router();
const usercontroller = require('../../controller/usercontroller');

routes.post('/register',usercontroller.registerAPI)
routes.post('/login',usercontroller.loginAPI)

module.exports = routes;