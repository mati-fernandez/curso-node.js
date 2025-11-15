// Datos mock:
let products = [
  { id: 1, title: 'Prod 1', price: 100 },
  { id: 2, title: 'Prod 2', price: 200 },
];

export const getAll = () => products;

export const getById = (id) => products.find((p) => p.id == id);

export const create = (data) => {
  const newProduct = { id: Date.now(), ...data };
  products.push(newProduct);
  return newProduct;
};

export const remove = (id) => {
  products = products.filter((p) => p.id != id);
  return { message: 'deleted' };
};

// CON ASINCRONIA PARA DB:
//

// import * as model from '../models/products.model.js';

// export const fetchAllProducts = async () => {
//   return await model.getAll();
// };

// export const fetchProductById = async (id) => {
//   const product = await model.getById(id);
//   if (!product) throw { status: 404, message: 'Producto no encontrado' };
//   return product;
// };

// export const createProduct = async ({ title, price, category }) => {
//   // validaciones
//   if (!title || !price || !category)
//     throw { status: 400, message: 'Datos incompletos' };
//   const payload = {
//     title,
//     price: Number(price),
//     category,
//     createdAt: new Date(),
//   };
//   return await model.create(payload);
// };

// export const deleteProduct = async (id) => {
//   const r = await model.remove(id);
//   if (!r) throw { status: 404, message: 'Producto no encontrado' };
//   return r;
// };
