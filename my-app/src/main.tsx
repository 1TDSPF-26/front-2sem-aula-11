import Erro from './routes/Error/Erro.tsx'
import EditarProduto from './routes/EditarProduto/EditarProduto.tsx'
import Produto from './routes/Produto/Index.tsx'
import Index from './routes/Home/Home.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import Home from './routes/Home/Home.tsx'


const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Erro />, children: [
      { path: "/", element: <Home /> },
      { path: "/Produto", element: <Produto /> },
      { path: "/Produto/:id", element: <EditarProduto /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)