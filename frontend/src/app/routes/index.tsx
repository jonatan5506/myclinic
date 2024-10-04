import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />
  }
]);
