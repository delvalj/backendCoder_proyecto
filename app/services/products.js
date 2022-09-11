const { containerProducts } = require("../main");

const listAllProducts = async () => {
  let products = await containerProducts.getAll();
  if (products === []) {
    return "Carrito Vacio";
  }
  return products;
};

const listOneProduct = async (id) => {
  let products = await containerProducts.getById(id);
  if (products === []) {
    return "Producto con Id ";
  }
  return products;
};

const createProducts = async (data) => {
  const { title, thumbnail, price, description, category } = data;
  const newProduct = {
    title: title,
    thumbnail,
    price,
    description,
    category,
  };
  await containerProducts.save(newProduct);
  return newProduct;  
};

const deleteOneProduct = async (id) => {

  if(!id){
    res.send('Error en Eliminar producto.')
  }
  return await containerProducts.deleteById(id);
};

module.exports = { listAllProducts, createProducts, deleteOneProduct, listOneProduct };
