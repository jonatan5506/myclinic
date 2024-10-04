//Queryes para o BD
import prisma from "../db";

interface TipoUsuario {
  usuario_tipo: string;
  parametro_edit_config: boolean;
}

interface Usuario {
  usuario_nome: string;
  usuario_login: string;
  usuario_cpf: string;
  usuario_senha: string;
  usuario_tipo_id: number;
}

class CreateUsuarioRepository {
  async criarUsuarioTipo(tipoUsuario: TipoUsuario) {
    await prisma.usuario_Tipo.create({
      data: {
        usuario_tipo: tipoUsuario.usuario_tipo,
        parametro_edit_config: tipoUsuario.parametro_edit_config
      }
    });
  }

  async criarUsuario(usuario: Usuario) {
    await prisma.usuario.create({
      data: {
        usuario_nome: usuario.usuario_nome,
        usuario_login: usuario.usuario_login,
        usuario_cpf: usuario.usuario_cpf,
        usuario_senha: usuario.usuario_senha,
        usuario_tipo_id: usuario.usuario_tipo_id
      }
    });
  }

  //GET
  async pegarUsuarioLogin(login:string){
    const dbResposta = await prisma.usuario.findFirst({
      where:{
        usuario_login: login
      }
    });
    return dbResposta;
  }

  //VERIFICAÇÕES

  async verificarDuplicidadeTipoUsuario(nome: string) {
    const dbResposta = await prisma.usuario_Tipo.findMany({
      where: {
        usuario_tipo: nome
      }
    });
    return dbResposta.length > 0;
  }

  async verificarUsuarioPorCpf(cpf: string): Promise<boolean> {
    const dbResposta = await prisma.usuario.findFirst({
      where: {
        usuario_cpf: cpf
      }
    });
    //Retorna true se o usuário já estiver no Banco
    return dbResposta !== null;
  }

  async verificarUsuarioExiste(login: string): Promise<boolean> {
    const usuario = await prisma.usuario.findFirst({
      where: {
        usuario_login: login
      }
    });
    return usuario !== null;
  }
}

export { CreateUsuarioRepository, TipoUsuario, Usuario };
