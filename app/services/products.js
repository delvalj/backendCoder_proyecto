const { containerProducts } = require("../main");

const listAllProducts = async () => {
  let products = await containerProducts.getAll();
  if (products === []) {
    return "Carrito Vacio";
  }
  return products;
};

const createProducts = (data) => {
  const { title, thumbnail, price, description, category } = data;
  const newProduct = {
    title: title,
    thumbnail,
    price,
    description,
    category,
  };
  return newProduct;
};

const deleteOneProduct = async (id) => {
    
  await containerProducts.deleteById(id);
};

module.exports = { listAllProducts, createProducts, deleteOneProduct };
