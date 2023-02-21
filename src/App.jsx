import "./App.css";
///Importacion de componentes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./helper/Error404";
import Accesorios_index from "./components/accesorios/Accesorios_index";
import Celulares_index from "./components/celulares/Celulares_index";
import Clientes_index from "./components/clientes/Clientes_index";
import Login_index from "./components/login/Login_index";
import AgregarCel from "./components/celulares/AgregarCel";
import AgregarAcc from "./components/accesorios/AgregarAcc";
import EditarCel from "./components/celulares/EditarCel";
import EditarClient from "./components/clientes/EditarClient";
import EditarAcc from "./components/accesorios/EditarAcc";
import AgregarClient from "./components/clientes/AgregarClient";

///Creacion de rutas

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login_index />,
    errorElement: <Error404 />,
  },
  // ↓ celulares  ↓    ↓ 
  {
    path: "/celulares",
    element: <Celulares_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/add-cel",
    element: <AgregarCel />,
    errorElement: <Error404 />,
  },
  {
    path: "/edit-cel/:id",
    element: <EditarCel />,
    errorElement: <Error404 />,
  },
  // ↑ celulares   ↑     ↑
  // ↓ clientes↓  ↓    ↓ 
  {
    path: "/clientes",
    element: <Clientes_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/edit-client/:id",
    element: <EditarClient />,
    errorElement: <Error404 />,
  },
  {
    path: "/add-client",
    element: <AgregarClient />,
    errorElement: <Error404 />,
  },
  // ↑ clientes↑   ↑     ↑
  // ↓ accesorios  ↓    ↓ 
  {
    path: "/accesorios",
    element: <Accesorios_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/add-acc",
    element: <AgregarAcc/>,
    errorElement: <Error404 />,
  },
  {
    path: "/edit-acc/:id",
    element: <EditarAcc />,
    errorElement: <Error404 />,
  },
   // ↑ accesorios   ↑     ↑
])
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
