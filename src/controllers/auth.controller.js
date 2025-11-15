// SIN JWT POR AHORA:

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@test.com' && password === '123') {
    return res.json({ token: 'fake-token-123' });
  }

  res.status(401).json({ error: 'Credenciales inválidas' });
};

// CON JWT:

// import * as authService from '../services/auth.service.js';

// export const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const token = await authService.login({ email, password });
//     res.json({ token });
//   } catch (err) {
//     next(err);
//   }
// };
