import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'



const router = createBrowserRouter([
  {path: "/" , element:<App/>, errorElement:<Error/>,children:[
    {path: "/", element:<Home/>},
    {path: "/produtos", element:<Produtos/>},
    {path:"/editar-produtos/:id", element:<EditarProdutos/>}
    //"/editar-produtos/:id" é o padrão para o react-router, se não for informado, ele vai procurar o padrão "editar-produtos" e vai procurar
   
  ]},
]);
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
