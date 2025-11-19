import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

import { notFound, errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(bodyParser.json());
// app.use(express.json()); Alternativa moderna

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

// 404 y errores
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log('Server OK! PORT: ' + PORT));
