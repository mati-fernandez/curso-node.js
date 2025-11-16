import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

const demoUser = { id: 'u1', email: 'test@test.com', password: '1234' };

export const login = async ({ email, password }) => {
  if (email !== demoUser.email || password !== demoUser.password) {
    throw { status: 401, message: 'Credenciales inválidas' };
  }
  const payload = { sub: demoUser.id, email: demoUser.email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
  return token;
};
