import { Router } from "express";
import { CreateUsuarioController } from "../controllers/usuarioController";
import { verificacaoToken } from "../middleware/verificacaoMiddle";

const router = Router();
const usuarioController =  new CreateUsuarioController();

router.post('/criarUsuarioTipo', usuarioController.criarUsuarioTipo);
router.post('/criarUsuario',verificacaoToken, usuarioController.criarUsuario);
router.post('/login', usuarioController.logarUsuario);

export default router;