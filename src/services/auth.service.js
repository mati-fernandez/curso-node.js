import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Primero generar el hash en la terminal usando npm run hash
// Luego agregar el hash al usuario y levantar el server

const demoUser = {
  id: 'FwTxzKzpi8VJ4fVQngk6',
  email: 'test@test.com',
  passwordHash: '$2b$10$nOOP5.MIqeq1R1klPujVZupaDRFeEnmGDOmwpLavmB1kXLWrKiOge',
};

export const login = async ({ email, password }) => {
  const match = await bcrypt.compare(password, demoUser.passwordHash);

  if (email !== demoUser.email || !match) {
    throw { status: 401, message: 'Credenciales inválidas' };
  }

  const payload = { sub: demoUser.id, email: demoUser.email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
  return token;
};
