import { createContext, ReactNode, useState } from "react";

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
  logar: (usuario:string, senha:string) => Promise<string | null>;
  deslogar: () => void;
};

type AppProviderData = {
    children:ReactNode
}

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({children}:AppProviderData) => {
    const [usuario,setUsuario] = useState<Usuario>();
    const logado = Boolean(usuario);

    const logar = async (login:string, senha:string)=>{
        alert(usuario + " + " + senha);
        return null;
    }

    const deslogar = () => {

    }

    return(
        <AppContext.Provider value={{usuario,logado,logar,deslogar}}>
            {children}
        </AppContext.Provider>
    )
}
