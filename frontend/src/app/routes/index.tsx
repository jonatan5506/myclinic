import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, Agendamento, Faturamento, Pep, Cadastro } from "../pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "Agendamento",
        element: <Agendamento />,
      },
      {
        path: "Faturamento",
        element: <Faturamento />,
      },
      {
        path: "Pep",
        element: <Pep />,
      },
      {
        path: "Cadastro",
        element: <Cadastro />,
      }
    ],
  }
]);
