import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Produto from './routes/Produto/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
