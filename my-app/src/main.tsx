import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Produtos from './routes/Produtos/index.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  </StrictMode>,
)
