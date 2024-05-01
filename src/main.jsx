import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home.jsx'
import './index.css'
import App from './App.jsx'
import Cadastrar from './pages/cadastrar.jsx'
import Usuarios from './pages/usuarios.jsx'
import Detalhes from './pages/detalhes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cadastrar",
        element: <Cadastrar/>
      },
      {
        path: "/usuarios",
        element: <Usuarios/>
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
