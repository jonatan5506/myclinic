//Recebe requisições http e responde
import { Request, response, Response } from "express";
import { CreateUsuarioService } from "../services/usuarioService";

class CreateUsuarioController{

    async logarUsuario(req:Request, res:Response){
        const usuarioService = new CreateUsuarioService();
        const { usuario_login: login, usuario_senha: senha } = req.body;
        
        try {
            const response = await usuarioService.logarUsuario(login,senha);
            res.status(200).json({usuario:response})//pode dar erro neste usuario
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message:error.message});
            } else {
                res.status(400).json({message:"Falha ao realizar login!"})
            }
        }
    }

    async criarUsuarioTipo(req:Request, res:Response){
        const usuarioService = new CreateUsuarioService();
        const tipoUsuario = req.body;
        try {
            await usuarioService.criarUsarioTipo(tipoUsuario);
            res.status(200).json({message:"Tipo de usuário criado com sucesso!"})
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message:error.message});
            } else {
                res.status(400).json({message:"Falha ao criar tipo de usuário!"})
            }
        }
    }

    async criarUsuario(req:Request, res:Response){
        const usuarioService = new CreateUsuarioService();
        const usuario = req.body;
        try {
            await usuarioService.criarUsuario(usuario);
            res.status(200).json({message:"Usuário criado com sucesso!"})
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message:error.message})
            } else {
                res.status(400).json({message:"Falha ao criar usuário!"})
            }
        }
    }
}

export {CreateUsuarioController};
