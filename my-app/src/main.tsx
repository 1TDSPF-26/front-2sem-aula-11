import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* ROUTES*/

import EditarProdtuo from './routes/EditarProdutos/index.tsx'
import Produto from './routes/Produtos/index.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'