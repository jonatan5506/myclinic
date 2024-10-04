//Regras de Negócio
import dotenv from "dotenv";
dotenv.config(); 
import { compare, hash } from "bcrypt";
import { CreateUsuarioRepository, TipoUsuario, Usuario } from "../repositories/usuarioRepository";
import { cpf } from 'cpf-cnpj-validator'; 
import { sign } from "jsonwebtoken";

class CreateUsuarioService {

    async logarUsuario(login:string, senha:string){
        const usuarioRepository = new CreateUsuarioRepository();
        const usuarioLoginExiste = await usuarioRepository.verificarUsuarioExiste(login);

        if (!usuarioLoginExiste) {
            throw new Error("Login de usuário não está cadastrado!");
        }
        const dbUsuario = await usuarioRepository.pegarUsuarioLogin(login);
        const senhaCorreta = await compare(senha, dbUsuario!.usuario_senha);

        if (!senhaCorreta) {
            throw new Error("Login ou Senha inválidos!");
        }

        //GERAR TOKEN
        const chaveSecreta = process.env.SECRET_KEY;
        
        const token = sign({
            nomeUsuario: dbUsuario?.usuario_nome,
            loginUsuario:dbUsuario?.usuario_login,
            idUsuario: dbUsuario?.usuario_id,
            tipoUsuario: dbUsuario?.usuario_tipo_id
        }, chaveSecreta!,{
            expiresIn: '30d'//tempo de expiração do token
        });

        return {
            nomeUsuario: dbUsuario?.usuario_nome,
            loginUsuario:dbUsuario?.usuario_login,
            idUsuario: dbUsuario?.usuario_id,
            idTipoUsuario: dbUsuario?.usuario_tipo_id,
            token:token
        }
    }

    async criarUsarioTipo(tipoUsuario: TipoUsuario) {
        const usuarioRepository =  new CreateUsuarioRepository();
        const TipoUsuarioExiste = await usuarioRepository.verificarDuplicidadeTipoUsuario(tipoUsuario.usuario_tipo);
        
        if (TipoUsuarioExiste) {
            throw new Error("Tipo usuário já existe");
        }
        await usuarioRepository.criarUsuarioTipo(tipoUsuario);
    }
    
    async criarUsuario(usuario: Usuario){
        const usuarioRepository = new CreateUsuarioRepository();
        const usuarioLoginExiste = await usuarioRepository.verificarUsuarioExiste(usuario.usuario_login);
        if (usuarioLoginExiste) {
            throw new Error("Login de usuário já está em uso!");
        }

        //Validação CPF
        const usuarioCpfExistente = await usuarioRepository.verificarUsuarioPorCpf(usuario.usuario_cpf);
        if (usuarioCpfExistente) {
            throw new Error("Cpf já cadastrado!");
        }

        if (!cpf.isValid(usuario.usuario_cpf)) {
            throw new Error("Cpf inválido!");
        }

        //Criptografando senha 
        usuario.usuario_senha = await hash(usuario.usuario_senha,8);

        await usuarioRepository.criarUsuario(usuario);
    }
}

export {CreateUsuarioService};
