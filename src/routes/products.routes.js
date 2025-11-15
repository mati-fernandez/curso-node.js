import { Router } from 'express';
import * as ctrl from '../controllers/products.controller.js';
// import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.delete('/:id', ctrl.remove);
// router.post('/create', authenticate, ctrl.create); // protegido
// router.delete('/:id', authenticate, ctrl.remove); // protegido

export default router;
