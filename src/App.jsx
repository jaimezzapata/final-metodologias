import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './helper/Error404'
import Accesorios_index from './components/accesorios/Accesorios_index'
import Celulares_index from './components/celulares/Celulares_index'
import Login_index from './components/login/Login_index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: '/accesorios',
    element: <Accesorios_index />,
    errorElement: <Error404 />
  },
  {
    path: '/celulares',
    element: <Celulares_index />,
    errorElement: <Error404 />
  },
  {
    path: '/login',
    element: <Login_index />,
    errorElement: <Error404 />
  }
])

const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
