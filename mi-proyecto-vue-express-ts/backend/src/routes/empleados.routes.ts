import { Router, Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// Interfaces
interface Empleado extends RowDataPacket {
  id_empleado: number;
  nombre_empleado: string;
  apellido_empleado: string;
}

interface ApiResponse {
  message: string;
  data?: any;
}

const router = Router();

// GET todos los empleados
router.get('/', async (req: Request, res: Response<ApiResponse>) => {
  try {
    const [empleados] = await pool.query<Empleado[]>('SELECT * FROM empleados');
    res.json({
      message: 'Empleados obtenidos exitosamente',
      data: empleados
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener empleados',
      data: error
    });
  }
});

// GET empleado por ID
router.get('/:id', async (req: Request, res: Response<ApiResponse>) => {
  try {
    const [empleados] = await pool.query<Empleado[]>(
      'SELECT * FROM empleados WHERE id_empleado = ?', 
      [req.params.id]
    );
    
    if (empleados.length === 0) {
      return res.status(404).json({
        message: 'Empleado no encontrado',
        data: null
      });
    }

    res.json({
      message: 'Empleado encontrado',
      data: empleados[0]
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el empleado',
      data: error
    });
  }
});

export default router;