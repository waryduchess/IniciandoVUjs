import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './config/database';
import empleadosRoutes from './routes/empleados.routes';
import sizesRoutes from './routes/sizes.routes';
// Definición de interfaces
interface ApiResponse {
  message: string;
  data?: any;
}

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/empleados', empleadosRoutes);

// Ruta raíz
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'API funcionando correctamente',
    endpoints: [
      'GET /api/empleados',
      'GET /api/empleados/:id'
    ]
  });
});
app.use('/api/size', sizesRoutes);

// Ruta raíz
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'API funcionando correctamente',
    endpoints: [
      'GET /api/size',
      'GET /api/size/:id'
    ]
  });
});

// Manejo de errores global
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Algo salió mal!',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📝 API documentación: http://localhost:${PORT}`);
});