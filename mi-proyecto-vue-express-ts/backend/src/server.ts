import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

// Middleware
app.use(cors());
app.use(express.json());

// Tipos personalizados
interface ApiResponse {
  message: string;
  data?: any;
}
// Ruta raíz
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'API funcionando correctamente',
    endpoints: [
      'GET /api/test',
      'GET /api/users/:id'
    ]
  });
});
// Rutas
app.get('/api/test', (req: Request, res: Response<ApiResponse>) => {
  res.json({ 
    message: '¡Hola desde Express con TypeScript!',
    data: { timestamp: new Date().toISOString() }
  });
});

app.get('/api/users/:id', (req: Request, res: Response<ApiResponse>) => {
  const userId = parseInt(req.params.id);
  res.json({ 
    message: 'Usuario encontrado',
    data: { id: userId, name: 'Usuario de prueba' }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});