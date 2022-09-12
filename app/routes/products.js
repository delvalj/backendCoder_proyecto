const express =  require('express');
const routerProducts = express.Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products')

routerProducts.get('/', getProducts );
routerProducts.get('/:id', getProduct);
routerProducts.post('/', createProduct);
routerProducts.patch('/:id', updateProduct);
routerProducts.delete('/:id', deleteProduct); 

module.exports = routerProducts