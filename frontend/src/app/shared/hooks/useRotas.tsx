//Impede a navegação livre entre a tela de login e o Dashboard
import { parseCookies } from "nookies";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface TelaDeUsuarioNaoLogadoProps {
    element: ReactElement;
}

export const TelaDeUsuarioNaoLogado:React.FC<TelaDeUsuarioNaoLogadoProps> = ({ element }) => {
    const cookies = parseCookies();
    const token = cookies['@myclinic.token'];
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/Dashboard');
        }
    }, [token, navigate]);

    return token ? null : element;
};

interface TelaDeUsuarioLogadoProps {
    element: ReactElement;
}

export const TelaDeUsuarioLogado:React.FC<TelaDeUsuarioLogadoProps> = ({ element }) => {
    const cookies = parseCookies();
    const token = cookies['@myclinic.token'];
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return token ? element : null;
};
