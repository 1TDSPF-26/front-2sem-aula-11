import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router';
import Home from './routes/Home/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import Error from './routes/Error/index.tsx';

Error
Home
EditarProdutos
Produtos


const router = createBrowserRouter([
  { path: "/", < App />, errorElement: Error,children:[ 
    { path: "/", element: <EditarProdutos /> },
    { path: "/rota1", element: <Home /> },
    { path: "/rota2", element: <Produtos /> },
  ]
}
]
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
  

)
