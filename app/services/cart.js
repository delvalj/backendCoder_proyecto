const { containerCart } = require("../main");

const listAllProducts = async () => {
  let products = await containerCart.getAll();
  if (products === []) {
    return "Carrito Vacio";
  }
  return products;
};

const createCarrito = async (data) => {
  const { title, thumbnail, price, description, category } = data;

  const newProduct = {
    title: title,
    thumbnail,
    price,
    description,
    category,
  };

    await containerCart.save(newProduct);
  return newProduct;  
};

const deleteOneProduct = async (id) => {
  if(!id){
    res.send('Error en Eliminar producto.')
  }
  return await containerCart.deleteById(id);
};


module.exports = { listAllProducts, createCarrito, deleteOneProduct };