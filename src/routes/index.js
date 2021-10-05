const { Router } = require('express');

const UserController = require('../controller/UserController');

const route = Router();
const userController = new UserController();

route.get('/users', userController.index);
route.post('/users', userController.create);
route.get('/users/:id', userController.findOne);

module.exports = route;