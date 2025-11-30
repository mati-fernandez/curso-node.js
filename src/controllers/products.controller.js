import * as service from '../services/products.service.js';

export const getAll = async (_, res, next) => {
  try {
    const data = await service.fetchAllProducts();
    res.status(200).json(data.length > 0 ? data : 'No hay ningún producto aún');
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const data = await service.fetchProductById(req.params.id);
    if (!data) return res.status(404).json({ msj: 'Producto no encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const data = await service.createProduct(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const data = await service.deleteProduct(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
