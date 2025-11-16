import * as authService from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login({ email, password });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
