import * as model from '../models/products.model.js';

export const fetchAllProducts = async () => {
  return await model.getAll();
};

export const fetchProductById = async (id) => {
  const product = await model.getById(id);
  if (!product) throw { status: 404, message: 'Producto no encontrado' };
  return product;
};

export const createProduct = async ({
  title,
  price,
  category,
  stock,
  description,
}) => {
  // validaciones
  if (!title || !price || !stock)
    throw {
      status: 400,
      message: 'Datos incompletos (title, price y stock son escenciales',
    };
  const payload = {
    title,
    price: Number(price),
    category: category || 'Sin categoría',
    createdAt: new Date(),
    stock: Math.abs(Number(stock)) || 0,
    description: description || '',
  };
  return await model.create(payload);
};

export const deleteProduct = async (id) => {
  const r = await model.remove(id);
  if (!r) throw { status: 404, message: 'Producto no encontrado' };
  return r;
};
