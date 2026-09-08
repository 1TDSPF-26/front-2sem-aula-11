import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Home from './routes/Home/index.tsx'



//criando vetor de rotas 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
