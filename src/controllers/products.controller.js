import * as productsService from '../services/products.service.js';

export const getAll = (req, res) => {
  const products = productsService.getAll();
  res.json(products);
};

export const getById = (req, res) => {
  const product = productsService.getById(req.params.id);
  res.json(product);
};

export const create = (req, res) => {
  const product = productsService.create(req.body);
  res.json(product);
};

export const remove = (req, res) => {
  const deleted = productsService.remove(req.params.id);
  res.json(deleted);
};

//  CON ASINCRONIA PARA DB:
// import * as service from '../services/products.service.js';

// export const getAll = async (req, res, next) => {
//   try {
//     const data = await service.fetchAllProducts();
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getById = async (req, res, next) => {
//   try {
//     const data = await service.fetchProductById(req.params.id);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// };

// export const create = async (req, res, next) => {
//   try {
//     const data = await service.createProduct(req.body);
//     res.status(201).json(data);
//   } catch (err) {
//     next(err);
//   }
// };

// export const remove = async (req, res, next) => {
//   try {
//     const data = await service.deleteProduct(req.params.id);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// };
