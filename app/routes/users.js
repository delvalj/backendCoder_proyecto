const express =  require('express');
const routerUsers = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users')

routerUsers.get('/', getUsers );
routerUsers.get('/:id', getUser);
routerUsers.post('/', createUser);
routerUsers.patch('/:id', updateUser);
routerUsers.delete('/:id', deleteUser); 

module.exports = routerUsers