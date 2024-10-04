import { Router } from "express";
import usuarioRoutes from "./usuariosRoute";

const router = Router();

//ROTAS DE USUARIOS
router.use('/usuarios', usuarioRoutes);

export default router;
