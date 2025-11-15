import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

import { notFound, errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

// 404 y errores
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => console.log('Server OK'));
