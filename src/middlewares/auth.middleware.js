import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export const authenticate = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw { status: 401, message: 'Token faltante' };
    const [, token] = auth.split(' ');
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    next({ status: 401, message: 'No autorizado' });
  }
};
