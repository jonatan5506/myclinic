import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, Agendamento, Faturamento, Pep, Cadastro } from "../pages";
import { TelaDeUsuarioLogado, TelaDeUsuarioNaoLogado } from "../shared/hooks/useRotas";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <TelaDeUsuarioNaoLogado element={<Login></Login>}/>
  },
  {
    path: "/Dashboard",
    element: <TelaDeUsuarioLogado element={<Dashboard></Dashboard>}/>,
    children: [
      {
        path: "Agendamento",
        element: <TelaDeUsuarioLogado element={<Agendamento></Agendamento>}/>
      },
      {
        path: "Faturamento",
        element: <TelaDeUsuarioLogado element={<Faturamento></Faturamento>}/>
      },
      {
        path: "Pep",
        element: <TelaDeUsuarioLogado element={<Pep></Pep>}/>
      },
      {
        path: "Cadastro",
        element: <TelaDeUsuarioLogado element={<Cadastro></Cadastro>}/>
      }
    ],
  }
]);
