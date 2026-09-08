import Erro from './routes/Error/Erro.tsx'
import EditarProduto from './routes/EditarProduto/EditarProduto.tsx'
import Produto from './routes/Produto/Index.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

