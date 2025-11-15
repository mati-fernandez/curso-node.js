export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Error interno';
  res.status(status).json({ message });
};
