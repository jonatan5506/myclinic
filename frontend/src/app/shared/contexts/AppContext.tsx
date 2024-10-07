import { createContext, ReactNode, useState } from "react";
import { api } from "../api/api";
import nookies from "nookies";

type Usuario = {
  nomeUsuario: string;
  loginUsuario: string;
  idUsuario: number;
  idTipoUsuario: number;
  token: string;
};

type AppContextData = {
  usuario: Usuario | undefined;
  logado: boolean;
  logar: (usuario: string, senha: string) => Promise<string | null>;
  deslogar: () => void;
};

type AppProviderData = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({ children }: AppProviderData) => {
  const [usuario, setUsuario] = useState<Usuario>();
  const logado = Boolean(usuario);

  const logar = async (usuario: string, senha: string) => {
    try {
      const response = await api({
        method: "post",
        url: "usuarios/login",
        data: {
          usuario: usuario,
          senha: senha
        }
      });
      //17min
      setUsuario({
        nomeUsuario: response.data.usuario.nomeUsuario,
        loginUsuario: response.data.usuario.loginUsuario,
        idUsuario: response.data.usuario.idUsuario,
        idTipoUsuario: response.data.usuario.idTipoUsuario,
        token: response.data.usuario.token
      });

      nookies.set(null, '@myclinic.token', response.data.usuario.token, {
        maxAge: 30 * 24 * 60 * 60
      });

      api.defaults.headers["Authorization"] =
        "Bearer " + response.data.usuario.token;

      //redirecionar
      window.location.href = "/Dashboard";

      return null;
    } catch (error:any) {
      return error.response.data.message;
    }
  }

  const deslogar = () => {
    try {
      nookies.destroy(null, '@myclinic.token');
      window.location.href = '/'
    } catch (error) {
      console.log("Erro ao deslogar!");
      
    }
  };

  return (
    <AppContext.Provider value={{ usuario, logado, logar, deslogar }}>
      {children}
    </AppContext.Provider>
  );
};
