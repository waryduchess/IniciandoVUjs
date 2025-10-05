import { Router, Request, Response } from "express";
import { pool } from "../config/database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

// Interfaces
interface Size extends RowDataPacket {
  id_size: number;
  size: string;
}

interface ApiResponse {
  message: string;
  data?: any;
}

const router = Router();

// GET todos los tamaños
router.get("/", async (req: Request, res: Response<ApiResponse>) => {
  try {
    const [sizes] = await pool.query<Size[]>("SELECT * FROM sizes");
    res.json({
      message: "Tamaños obtenidos exitosamente",
      data: sizes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener tamaños",
      data: error,
    });
  }
});

// GET tamaño por ID
router.get("/:id", async (req: Request, res: Response<ApiResponse>) => {
  try {
    const [sizes] = await pool.query<Size[]>(
      "SELECT * FROM sizes WHERE id_size = ?",
      [req.params.id]
    );

    if (sizes.length === 0) {
      return res.status(404).json({
        message: "Tamaño no encontrado",
        data: null,
      });
    }

    res.json({
      message: "Tamaño encontrado",
      data: sizes[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el tamaño",
      data: error,
    });
  }
});

// POST crear nuevo tamaño
router.post("/", async (req: Request, res: Response<ApiResponse>) => {
  try {
    const { size } = req.body;
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO sizes (size) VALUES (?)",
      [size]
    );

    res.status(201).json({
      message: "Tamaño creado exitosamente",
      data: { id: result.insertId, size },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el tamaño",
      data: error,
    });
  }
});

// PUT actualizar tamaño
router.put("/:id", async (req: Request, res: Response<ApiResponse>) => {
  try {
    const { size } = req.body;
    const [result] = await pool.query<ResultSetHeader>(
      "UPDATE sizes SET size = ? WHERE id_size = ?",
      [size, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Tamaño no encontrado",
        data: null,
      });
    }

    res.json({
      message: "Tamaño actualizado exitosamente",
      data: { id: req.params.id, size },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el tamaño",
      data: error,
    });
  }
});

// DELETE eliminar tamaño
router.delete("/:id", async (req: Request, res: Response<ApiResponse>) => {
  try {
    const [result] = await pool.query<ResultSetHeader>(
      "DELETE FROM sizes WHERE id_size = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Tamaño no encontrado",
        data: null,
      });
    }

    res.json({
      message: "Tamaño eliminado exitosamente",
      data: { id: req.params.id },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el tamaño",
      data: error,
    });
  }
});

export default router;
