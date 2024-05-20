import React from 'react'
import ReactDOM from 'react-dom/client'
/*import App from './App.tsx'*/
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListaAlunos from './pages/chamadaProfessor/index.tsx'
import './global.css'
import Login from './pages/telaLogin/index.tsx'
import Registre from './pages/registre/index.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registre",
    element: <Registre />,
  },
  {
    path: "/chamada_professor",
    element: <ListaAlunos />,
  },
])

/*  <App />*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
