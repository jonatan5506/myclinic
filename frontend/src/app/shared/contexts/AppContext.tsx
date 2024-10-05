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
  logar: (login:string, senha:string) => Promise<string | null>;
  deslogar: () => void;
};

type AppProvider = {
    children:ReactNode
}

const AppContext = createContext({} as AppContextData);

export const AppProvider = ({children}:AppProvider) => {
    const [usuario,setUsuario] = useState<Usuario>();
    const logado = Boolean(usuario);

    const logar = async (login:string, senha:string)=>{
        alert("Chamou a função de logar!");
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
